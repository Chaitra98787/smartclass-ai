import { Link } from "react-router-dom";

<div className="sidebar">

  <h2>SmartClass</h2>

  <ul>
    <li><Link to="/teacher-dashboard">Dashboard</Link></li>
    <li><Link to="/upload-notes">Upload Notes</Link></li>
    <li><Link to="/generate-quiz">AI Quiz Generator</Link></li>
    <li><Link to="/student-analytics">Analytics</Link></li>
    <li>Logout</li>
  </ul>

</div>