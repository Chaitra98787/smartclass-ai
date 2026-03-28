import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:5000/login", {
        email: email.trim(),
        password: password.trim(),
      });

      console.log("RESPONSE:", res.data);

      if (res.data.role === "teacher") {
        navigate("/teacher-dashboard");
      } else if (res.data.role === "student") {
        navigate("/student-dashboard");
      } else {
        alert("Role missing ❌");
      }

    } catch (err) {
      alert("Invalid credentials ❌");
    }
  };

  return (
    <div>
      <h2>Login</h2>

      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login; // 🚨 THIS LINE FIXES YOUR ERROR