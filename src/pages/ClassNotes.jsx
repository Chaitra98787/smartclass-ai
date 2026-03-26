import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function ClassNotes() {
  const { classId } = useParams();

  const [file, setFile] = useState(null);
  const [files, setFiles] = useState([]);

  // ✅ FETCH FILES
  const fetchFiles = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/notes/${classId}`
      );

      console.log("RESPONSE:", res.data);

      setFiles(res.data.files || []);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchFiles();
  }, [classId]);

  // ✅ UPLOAD
  const handleUpload = async () => {
    if (!file) return alert("Select file");

    const formData = new FormData();
    formData.append("file", file);

    try {
      await axios.post(
        `http://localhost:5000/upload-notes/${classId}`,
        formData
      );

      alert("Upload successful ✅");

      setFile(null);
      fetchFiles();
    } catch (err) {
      alert("Upload failed ❌");
    }
  };

  return (
    <div style={{ padding: "30px", maxWidth: "700px", margin: "auto" }}>
      <h2>{classId.toUpperCase()} Notes 📂</h2>

      {/* ✅ SIMPLE WORKING UPLOAD BOX */}
      <div
        style={{
          border: "2px dashed #6366f1",
          padding: "40px",
          borderRadius: "16px",
          textAlign: "center",
          marginBottom: "20px"
        }}
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => {
          e.preventDefault();
          setFile(e.dataTransfer.files[0]);
        }}
      >
        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
        />

        <p>Drag & drop or click to upload</p>

        {file && <p>📄 {file.name}</p>}

        <button onClick={handleUpload}>Upload</button>
      </div>

      {/* FILE LIST */}
      <div>
        <h3>Uploaded Files</h3>

        {files.length === 0 ? (
          <p>No files uploaded</p>
        ) : (
          files.map((f, i) => (
            <div key={i} style={{
              background: "#eee",
              padding: "10px",
              margin: "5px 0",
              borderRadius: "8px"
            }}>
              📄 {f.name}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default ClassNotes;