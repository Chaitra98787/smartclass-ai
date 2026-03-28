import { useEffect, useState } from "react";
import axios from "axios";
import StudentLayout from "./StudentLayout";
import "./ReferNotes.css";

function ReferNotes() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/get-notes")
      .then(res => setNotes(res.data));
  }, []);

  return (
    <StudentLayout>

      <h2>Refer Notes</h2>

      <div className="notes">

        {notes.map((n, i) => (
          <div className="note" key={i}>
            <div>
              <h3>{n.subject}</h3>
              <p>Class: {n.class}</p>
            </div>

            <a href={`http://localhost:5000/uploads/${n.file}`}>
              View →
            </a>
          </div>
        ))}

      </div>

    </StudentLayout>
  );
}

export default ReferNotes;