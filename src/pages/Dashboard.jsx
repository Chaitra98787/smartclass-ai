import "./Dashboard.css";
import { useState } from "react";

function Dashboard() {
  const today = new Date();
  const [currentDate, setCurrentDate] = useState(today.getDate());

  const daysInMonth = new Date(
    today.getFullYear(),
    today.getMonth() + 1,
    0
  ).getDate();

  return (
    <div className="dashboard">

      {/* SIDEBAR */}
      <div className="sidebar">
        <h2>CLYDE</h2>

        <ul>
          <li className="active">Dashboard</li>
          <li>Courses</li>
          <li>Students</li>
          <li>Materials</li>
          <li>Chat</li>
        </ul>
      </div>

      {/* MAIN */}
      <div className="main">

        {/* HEADER */}
        <div className="topbar">
          <h2>Dashboard</h2>
          <div className="profile">Tina Walker</div>
        </div>

        {/* STATS */}
        <div className="stats">
          <div className="card">
            <h3>55</h3>
            <p>Total students</p>
          </div>

          <div className="card">
            <h3>40h</h3>
            <p>Productivity</p>
          </div>

          <div className="card">
            <h3>4/10</h3>
            <p>Completed courses</p>
          </div>
        </div>

        {/* CONTENT */}
        <div className="content">

          {/* LEFT */}
          <div className="left">

            <h3>Pending Homework</h3>

            <div className="homework">

              <div className="row">
                <span>Alex Johnson</span>
                <span>8th Grade</span>
                <span>Algebra</span>
                <span>92%</span>
                <button className="btn green">Test</button>
              </div>

              <div className="row">
                <span>Monika Doki</span>
                <span>5th Grade</span>
                <span>Geometry</span>
                <span>75%</span>
                <button className="btn purple">Quiz</button>
              </div>

              <div className="row">
                <span>Olivia Williams</span>
                <span>6th Grade</span>
                <span>Algebra</span>
                <span>65%</span>
                <button className="btn purple">Quiz</button>
              </div>

              <div className="row">
                <span>James Davis</span>
                <span>9th Grade</span>
                <span>Pre-Algebra</span>
                <span>83%</span>
                <button className="btn blue">Project</button>
              </div>

            </div>

          </div>

          {/* RIGHT CALENDAR */}
          <div className="right">

            <h3>Schedule</h3>

            <h4 className="month">
              {today.toLocaleString("default", { month: "long" })} {today.getFullYear()}
            </h4>

            <div className="calendar">

              {/* DAYS */}
              {["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map((d) => (
                <span className="day-name" key={d}>{d}</span>
              ))}

              {/* DATES */}
              {[...Array(daysInMonth)].map((_, i) => {
                const day = i + 1;

                return (
                  <span
                    key={day}
                    className={day === currentDate ? "active-day" : ""}
                    onClick={() => setCurrentDate(day)}
                  >
                    {day}
                  </span>
                );
              })}

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default Dashboard;