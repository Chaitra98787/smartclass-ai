import { Link } from "react-router-dom";
import "../App.css";
import bg from "../assets/bg.png";

function Home() {
  return (
    <div>

      {/* NAVBAR */}
      <nav className="navbar">
        <h2 className="logo">CLYDE</h2>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link> {/* ✅ FIXED */}
        </div>
      </nav>

      {/* HERO */}
      <section
        className="hero"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >
        <div className="hero-content">
          <h1>CLYDE Classroom Management System</h1>

          <p>
            AI-powered platform that automates quizzes, tracks student engagement,
            and predicts learning outcomes.
          </p>

          <Link to="/login">
            <button className="hero-btn">Get Started</button>
          </Link>
        </div>
      </section>

      {/* FEATURES (UNCHANGED) */}
      <section className="features">
        <h2>Powerful Features</h2>

        <div className="feature-container">
          <div className="feature-card">
            <h3>🤖 AI Quiz Generator</h3>
            <p>Upload lecture notes and automatically generate quizzes.</p>
          </div>

          <div className="feature-card">
            <h3>📸 Smart Attendance</h3>
            <p>Automatic attendance using facial recognition technology.</p>
          </div>

          <div className="feature-card">
            <h3>📊 Engagement Monitoring</h3>
            <p>Track student attention and classroom participation.</p>
          </div>

          <div className="feature-card">
            <h3>📈 Predictive Analytics</h3>
            <p>Identify struggling students early using AI insights.</p>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;