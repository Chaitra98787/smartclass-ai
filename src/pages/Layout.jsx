import { Link, Outlet } from "react-router-dom";
import "./Layout.css";

function Layout() {
  return (
    <div className="app-layout">

      <div className="sidebar">

        <h2>SmartClass</h2>

        <nav>
          <Link to="/teacher-dashboard">Dashboard</Link>
          <Link to="/upload-notes">Upload Notes</Link>
          <Link to="/generate-quiz">AI Quiz</Link>
          <Link to="/student-analytics">Analytics</Link>
        </nav>

      </div>

      <div className="main-content">
        <Outlet />
      </div>

    </div>
  );
}

export default Layout;