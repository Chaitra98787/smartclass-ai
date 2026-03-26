import "./StudentDashboard.css";

function StudentDashboard() {
  return (
    <div className="student-dashboard">

      {/* SIDEBAR */}
      <div className="student-sidebar">
        <h2>CLYDE</h2>

        <ul>
          <li className="active">Home</li>
          <li>My Results</li>
          <li>Submissions</li>
          <li>Take Quiz</li> {/* ✅ ADDED */}
          <li>Settings</li>
        </ul>
      </div>

      {/* MAIN */}
      <div className="student-main">

        {/* PROFILE */}
        <div className="profile-box">
          <h2>Your Profile</h2>
          <p>Hi Student, keep learning and improving 🚀</p>
          <button className="goal-btn">Set Goals</button>
        </div>

        {/* ASSIGNMENTS */}
        <div className="assignments">
          <h3>Your Assignments</h3>

          <div className="assignment-list">
            <div className="assignment">
              <h4>English Lesson</h4>
              <p>Progress: 35%</p>
            </div>

            <div className="assignment">
              <h4>Mathematics</h4>
              <p>Progress: 80%</p>
            </div>

            <div className="assignment">
              <h4>History</h4>
              <p>Progress: 60%</p>
            </div>
          </div>
        </div>

        {/* LESSONS */}
        <div className="lessons">
          <h3>Lessons for you</h3>

          <div className="lesson-cards">
            <div className="lesson yellow">
              <h4>Focus Words</h4>
              <p>English</p>
            </div>

            <div className="lesson red">
              <h4>Workshops</h4>
              <p>Extra-Curricular</p>
            </div>
          </div>
        </div>

      </div>

      {/* RIGHT PANEL */}
      <div className="student-right">

        {/* CALENDAR */}
        <div className="calendar-box">
          <h4>March 2026</h4>

          <div className="calendar">
            {[...Array(31)].map((_, i) => (
              <span key={i}>{i + 1}</span>
            ))}
          </div>
        </div>

        {/* TASKS */}
        <div className="tasks">
          <h4>Your Tasks</h4>

          <ul>
            <li>📤 Upload Assignment</li>
            <li>📖 Study for Quiz</li>
            <li>✍️ Practice Writing</li>
            <li>🔤 Spell Check</li>
          </ul>
        </div>

      </div>

    </div>
  );
}

export default StudentDashboard;