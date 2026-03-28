import "./Dashboard.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("user"));
    setUser(stored);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="dashboard">

      {/* SIDEBAR */}
      <div className="sidebar">
        <h2>CLYDE</h2>

        <ul>
          <li onClick={() => navigate("/upload-notes")}>Upload</li>
          <li onClick={() => navigate("/quiz-generator")}>Quiz</li>
          <li onClick={() => navigate("/results")}>Results</li>
        </ul>

        <button onClick={handleLogout}>Logout</button>
      </div>

      {/* MAIN */}
      <div className="main">

        {/* BANNER */}
        <div className="banner">
          <div>
            <h2>Good Morning 👋</h2>
            <p>{user?.email}</p>
          </div>
          <div className="badge">Teacher Panel</div>
        </div>

        {/* STATS */}
        <div className="stats">
          <div className="card">
            <h1>12</h1>
            <p>Quizzes</p>
          </div>

          <div className="card">
            <h1>5</h1>
            <p>Notes</p>
          </div>

          <div className="card">
            <h1>24</h1>
            <p>Students</p>
          </div>
        </div>

        {/* GRID */}
        <div className="grid">

          {/* LEFT */}
          <div className="big-card">
            <h3>Quick Actions</h3>

            <div className="actions">
              <div onClick={() => navigate("/upload-notes")}>
                Upload Notes
              </div>

              <div onClick={() => navigate("/quiz-generator")}>
                Create Quiz
              </div>

              <div onClick={() => navigate("/results")}>
                View Results
              </div>
            </div>
          </div>

          {/* MIDDLE - ANALYTICS */}
          <div className="side-card">

            <h3>Today's Progress</h3>

            <div className="progress-box">
              <CircularProgressbar value={75} text={`75%`} />
            </div>

            <p className="progress-text">
              75% tasks completed
            </p>

            <div className="mini-stats">
              <p>✔ 2 Quizzes</p>
              <p>✔ 3 Notes</p>
              <p>✔ 10 Students</p>
            </div>

          </div>

          {/* RIGHT - CALENDAR */}
          <div className="calendar-card">

            <h3>Schedule</h3>

            <Calendar className="calendar" />

            <div className="events">
              <p>📌 Parent Meeting - 10 AM</p>
              <p>📌 Quiz Review - 1 PM</p>
              <p>📌 Staff Meeting - 3 PM</p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default Dashboard;