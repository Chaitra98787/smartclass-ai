import StudentLayout from "./StudentLayout";
import "./StudentDashboard.css";

function StudentDashboard() {
  return (
    <StudentLayout>

      {/* HEADER */}
      <div className="top-bar">
        <div>
          <h2>Welcome back</h2>
          <p>Let's keep your progress going</p>
        </div>

        <button className="quiz-btn">
          Go to Quiz →
        </button>
      </div>

      {/* STATS */}
      <div className="stats">

        <div className="stat-card">
          <p>Pending</p>
          <h3>2 Quizzes</h3>
        </div>

        <div className="stat-card active">
          <p>Performance</p>
          <h3>82%</h3>
        </div>

        <div className="stat-card">
          <p>Completion</p>
          <h3>75%</h3>
        </div>

      </div>

      {/* ACTIVITY */}
      <div className="activity">

        <h3>Recent Activity</h3>

        <div className="activity-item">
          <span>Math Quiz Assigned</span>
          <span className="time">Due tomorrow</span>
        </div>

        <div className="activity-item">
          <span>English Assignment Submitted</span>
          <span className="time">Yesterday</span>
        </div>

      </div>

    </StudentLayout>
  );
}

export default StudentDashboard;