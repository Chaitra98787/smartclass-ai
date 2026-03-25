import "./Dashboard.css";

function Dashboard() {
  return (
    <div>

      <h1>Teacher Dashboard</h1>

      <div className="card-container">

        <div className="dashboard-card">
          <h3>Upload Lecture Notes</h3>
          <p>Upload PDF files.</p>
        </div>

        <div className="dashboard-card">
          <h3>Generate AI Quiz</h3>
          <p>Automatically create quizzes using AI.</p>
        </div>

        <div className="dashboard-card">
          <h3>View Student Performance</h3>
          <p>Track quiz scores and engagement.</p>
        </div>

      </div>

    </div>
  );
}

export default Dashboard;