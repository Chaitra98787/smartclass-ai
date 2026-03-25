import { Link } from "react-router-dom";
import "./Auth.css";

function Signup() {
  return (
    <div className="auth-container">
      <div className="auth-box">

        <h1>SmartClass AI</h1>
        <h2>Create Account</h2>

        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />

        <select>
          <option>Select Role</option>
          <option>Teacher</option>
          <option>Student</option>
        </select>

        <button>Sign Up</button>

        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>

      </div>
    </div>
  );
}

export default Signup;