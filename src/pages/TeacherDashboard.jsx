import { useNavigate } from "react-router-dom";

function TeacherDashboard() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Teacher Dashboard 👩‍🏫</h1>

      <button onClick={() => navigate("/upload-notes")}>
        Upload Notes
      </button>
    </div>
  );
}

export default TeacherDashboard;