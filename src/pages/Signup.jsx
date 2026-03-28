import "./Signup.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    email: "",
    password: "",
    role: "Student"
  });

  const handleSignup = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/signup",
        data
      );

      alert("Signup successful ✅");
      navigate("/login");

    } catch (err) {
      console.log(err);
      alert("Signup failed ❌");
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-card">

        <h1>CLYDE</h1>
        <h3>Create Account</h3>

        <input
          type="email"
          placeholder="Email"
          value={data.email}
          onChange={(e) =>
            setData({ ...data, email: e.target.value })
          }
        />

        <input
          type="password"
          placeholder="Password"
          value={data.password}
          onChange={(e) =>
            setData({ ...data, password: e.target.value })
          }
        />

        <select
          value={data.role}
          onChange={(e) =>
            setData({ ...data, role: e.target.value })
          }
        >
          <option>Student</option>
          <option>Teacher</option>
        </select>

        <button onClick={handleSignup}>
          Sign Up
        </button>

      </div>
    </div>
  );
}

export default Signup;