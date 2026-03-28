import { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./UploadNotes.css";

function UploadNotes() {
  const [file, setFile] = useState(null);
  const [className, setClassName] = useState("");
  const [subject, setSubject] = useState("");
  const [notes, setNotes] = useState([]);

  const fileRef = useRef();

  const fetchNotes = async () => {
    const res = await axios.get("http://localhost:5000/get-notes");
    setNotes(res.data);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const handleUpload = async () => {
    if (!file || !className || !subject) {
      alert("Fill all fields");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("class", className);
    formData.append("subject", subject);

    await axios.post("http://localhost:5000/upload-notes", formData);

    alert("Uploaded ✅");
    setFile(null);
    fetchNotes();
  };

  return (
    <div className="upload-page">

      {/* LEFT */}
      <div className="upload-card">
        <h2>Upload Notes</h2>

        <input
          placeholder="Class"
          value={className}
          onChange={(e) => setClassName(e.target.value)}
        />

        <input
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />

        <div
          className="file-box"
          onClick={() => fileRef.current.click()}
        >
          <input
            type="file"
            ref={fileRef}
            hidden
            onChange={(e) => setFile(e.target.files[0])}
          />
          {file ? file.name : "Click or drag file here"}
        </div>

        <button onClick={handleUpload}>Upload</button>
      </div>

      {/* RIGHT */}
      <div className="notes-card">
        <h2>Notes Library</h2>

        {notes.length === 0 ? (
          <p className="empty">No notes uploaded yet</p>
        ) : (
          notes.map((n, i) => (
            <div key={i} className="note-item">

              <div className="note-left">
                <h4>{n.subject}</h4>
                <p>{n.class}</p>
              </div>

              <a
                href={`http://localhost:5000/uploads/${n.file}`}
                target="_blank"
                rel="noreferrer"
                className="view-btn"
              >
                Open →
              </a>

            </div>
          ))
        )}
      </div>

    </div>
  );
}

export default UploadNotes;