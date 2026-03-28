import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import UploadNotes from "./pages/UploadNotes";
import ClassNotes from "./pages/ClassNotes";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import QuizGenerator from "./pages/QuizGenerator";
import StudentDashboard from "./pages/StudentDashboard";
import StudentQuiz from "./pages/StudentQuiz";
import StudentQuizzes from "./pages/StudentQuizzes";
import ApplyLeave from "./pages/ApplyLeave";
import ReferNotes from "./pages/ReferNotes";



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
      <Route path="/student-dashboard" element={<StudentDashboard />} />

      {/* Features */}
      <Route path="/upload-notes" element={<UploadNotes />} />
      <Route path="/upload-notes/:classId" element={<ClassNotes />} />
      <Route path="/quiz-generator" element={<QuizGenerator />} />
      <Route path="/student-quiz" element={<StudentQuiz />} />
      <Route path="/student-quizzes" element={<StudentQuizzes />} />
      <Route path="/apply-leave" element={<ApplyLeave />} />
      <Route path="/refer-notes" element={<ReferNotes />} />




    </Routes>
  );
}

export default App;