import "./Home.css";
import { useNavigate } from "react-router-dom";


function Home() {
  const navigate = useNavigate();

  return (
    <div
      className="home"
      style={{ backgroundImage: "url('/reva.avif')" }}
    >

      {/* NAVBAR */}
      <div className="navbar">
        <h2 className="logo">CLYDE</h2>

        <div className="nav-links">
          <button onClick={() => navigate("/")}>Home</button>
          <button onClick={() => navigate("/login")}>Login</button>
          <button onClick={() => navigate("/signup")}>Signup</button>
        </div>
      </div>

      {/* HERO */}
      <div className="overlay">
        <h1>CLYDE Classroom</h1>
        <h1 className="highlight">Management System</h1>

        <button onClick={() => navigate("/login")}>
          Get Started
        </button>
      </div>

    </div>
  );
}

export default Home;