import { Link } from "react-router-dom";
import "./Landing.css";

function Landing() {
  return (
    <div className="landing">

      {/* Navbar */}
      <nav className="navbar">
        <h2>SmartClass AI</h2>

        <div>
          <Link to="/login">Login</Link>
          <Link to="/signup" className="signup-btn">Sign Up</Link>
        </div>
      </nav>


      {/* Hero Section */}
      <div className="hero">

        <h1>Smart Classroom Management System</h1>

        <p>
          AI powered platform that generates quizzes from lecture notes,
          tracks student engagement and improves learning outcomes.
        </p>

        <div className="hero-buttons">
          <Link to="/login">
            <button className="login-btn">Login</button>
          </Link>

          <Link to="/signup">
            <button className="signup-btn">Sign Up</button>
          </Link>
        </div>

      </div>

    </div>
  );
}

export default Landing;