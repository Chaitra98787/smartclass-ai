import "./Dashboard.css";

function StudentDashboard() {
  return (
    <div className="dashboard">

      <div className="sidebar">
        <h2>SmartClass</h2>

        <ul>
          <li>Dashboard</li>
          <li>My Courses</li>
          <li>Assignments</li>
          <li>Quizzes</li>
          <li>Results</li>
          <li>Logout</li>
        </ul>
      </div>

      <div className="main-content">

        <h1>Student Dashboard</h1>

        <div className="card-container">

          <div className="dashboard-card">
            <h3>My Courses</h3>
            <p>View all enrolled courses.</p>
          </div>

          <div className="dashboard-card">
            <h3>Assignments</h3>
            <p>Upload and track assignments.</p>
          </div>

          <div className="dashboard-card">
            <h3>Quiz Results</h3>
            <p>Check your quiz scores.</p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default StudentDashboard;