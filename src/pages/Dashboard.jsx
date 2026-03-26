import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
  const navigate = useNavigate();

  const today = new Date();
  const currentDate = today.getDate();

  const [selectedDate, setSelectedDate] = useState(currentDate);

  const daysInMonth = new Date(2026, 2, 0).getDate();

  // Sample class data
  const classes = {
    9: ["Class 6th - 10AM", "Class 7th - 3PM"],
    10: ["Class 5th - 11AM"],
    11: ["Class 8th - 2PM"],
  };

  return (
    <div className="dashboard">

      {/* SIDEBAR */}
      <div className="sidebar">
        <h2>SmartClass</h2>

        <ul>
          <li className="active">Dashboard</li>
          <li>Classes</li>
          <li>Students</li>
          <li>Tests</li>
          <li>Analytics</li>
        </ul>

        <div className="create-box">
          <p>Create instant live class</p>
          <button>Create Class</button>
        </div>
      </div>

      {/* MAIN */}
      <div className="main">

        <h2>Good Morning, Teacher 👋</h2>

        <div className="banner">
          Your students are doing great 🎉 60% completed tests
        </div>

        <div className="content">

          {/* LEFT */}
          <div className="left">

            <div className="card">
              <h3>Submitted Tests</h3>

              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Date</th>
                    <th>Status</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>John</td>
                    <td>Today</td>
                    <td className="active-status">Active</td>
                  </tr>

                  <tr>
                    <td>Emma</td>
                    <td>Yesterday</td>
                    <td className="completed">Completed</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bottom-cards">

              <div className="card">
                <h3>Top Students</h3>
                <p>Lucas - 90%</p>
                <p>Roy - 85%</p>
                <p>Sophie - 84%</p>
              </div>

              <div className="card">
                <h3>Groups</h3>
                <p>Class 5th</p>
                <p>Class 6th</p>
              </div>

            </div>

          </div>

          {/* RIGHT PANEL */}
          <div className="right-panel">

            <div className="profile">
              <h3>Monica</h3>
              <p>Math Teacher</p>
            </div>

            {/* CALENDAR */}
            <div className="calendar-box">
              <h4>March 2026</h4>

              <div className="calendar">
                {[...Array(daysInMonth)].map((_, i) => {
                  const day = i + 1;

                  return (
                    <span
                      key={day}
                      className={day === selectedDate ? "active-date" : ""}
                      onClick={() => setSelectedDate(day)}
                    >
                      {day}
                    </span>
                  );
                })}
              </div>
            </div>

            {/* SCHEDULE */}
            <div className="schedule">
              <h4>Schedule</h4>

              {classes[selectedDate] ? (
                classes[selectedDate].map((cls, i) => (
                  <p
                    key={i}
                    className="clickable"
                    onClick={() => navigate("/attendance")}
                  >
                    {cls}
                  </p>
                ))
              ) : (
                <p>No classes</p>
              )}
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;