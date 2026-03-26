import "./Login.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();

  const [role, setRole] = useState("Student");

  const handleLogin = () => {
    if (role === "Teacher") {
      navigate("/teacher-dashboard"); // ✅ GO TO TEACHER DASHBOARD
    } else {
      navigate("/student-dashboard"); // (optional)
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">

        <h1>EduGen AI</h1>
        <h2>Login</h2>

        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />

        <select onChange={(e) => setRole(e.target.value)}>
          <option>Student</option>
          <option>Teacher</option>
        </select>

        {/* ✅ FIXED BUTTON */}
        <button onClick={handleLogin}>Login</button>

      </div>
    </div>
  );
}

export default Login;