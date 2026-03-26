import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import UploadNotes from "./pages/UploadNotes";
import ClassNotes from "./pages/ClassNotes";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import QuizGenerator from "./pages/QuizGenerator";

function App() {
  return (
    <Routes>

      {/* Landing */}
      <Route path="/" element={<Home />} />

      {/* Auth */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* Dashboard */}
      <Route path="/teacher-dashboard" element={<Dashboard />} />

      {/* Features */}
      <Route path="/upload-notes" element={<UploadNotes />} />
      <Route path="/upload-notes/:classId" element={<ClassNotes />} />
      <Route path="/quiz-generator" element={<QuizGenerator />} />

    </Routes>
  );
}

export default App;