import { useState } from "react";
import axios from "axios";

function ClassNotes() {
  const [file, setFile] = useState(null);
  const [subject, setSubject] = useState("");

  const handleUpload = async () => {
    if (!file || !subject) {
      alert("Select file and subject");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("class", "sem1"); // 🔥 you can make dynamic
    formData.append("subject", subject);

    try {
      await axios.post("http://localhost:5000/upload-notes", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });

      alert("Upload successful ✅");
    } catch (err) {
      console.log(err);
      alert("Upload failed ❌");
    }
  };

  return (
    <div style={{ padding: "40px" }}>

      <h2>Upload Notes</h2>

      <input
        type="text"
        placeholder="Subject"
        onChange={(e) => setSubject(e.target.value)}
      />

      <br /><br />

      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
      />

      <br /><br />

      <button onClick={handleUpload}>
        Upload
      </button>

    </div>
  );
}

export default ClassNotes;