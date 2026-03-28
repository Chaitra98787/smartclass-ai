import { useNavigate } from "react-router-dom";
import "./StudentLayout.css";

function StudentLayout({ children }) {
  const navigate = useNavigate();

  return (
    <div className="layout">

      {/* SIDEBAR */}
      <div className="sidebar">
        <h2 className="logo">CLYDE</h2>

        <p onClick={() => navigate("/student-dashboard")}>Home</p>
        <p onClick={() => navigate("/student-quizzes")}>Take Quiz</p>
        <p onClick={() => navigate("/refer-notes")}>Refer Notes</p>
        <p onClick={() => navigate("/apply-leave")}>Apply Leave</p>
      </div>

      {/* MAIN */}
      <div className="main">
        {children}
      </div>

    </div>
  );
}

export default StudentLayout;