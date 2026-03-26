import { useNavigate } from "react-router-dom";
import "./UploadNotes.css";

function UploadNotes() {
  const navigate = useNavigate();

  const classes = [
    { name: "Sem 1", id: "sem1" },
    { name: "Sem 2", id: "sem2" },
    { name: "Sem 3", id: "sem3" },
    { name: "CSIT", id: "csit" },
    { name: "CSSE", id: "csse" },
  ];

  return (
    <div className="upload-page">

      {/* TITLE (EMOJI REMOVED) */}
      <h2>Select Class</h2>

      <div className="card-container">
        {classes.map((cls) => (
          <div
            key={cls.id}
            className="class-card"
            onClick={() => navigate(`/upload-notes/${cls.id}`)}
          >
            <h3>{cls.name}</h3>
            <p>Open Folder</p>
          </div>
        ))}
      </div>

    </div>
  );
}

export default UploadNotes;