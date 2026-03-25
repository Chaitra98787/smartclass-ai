import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import Layout from "./pages/Layout";
import Dashboard from "./pages/Dashboard";
import UploadNotes from "./pages/UploadNotes";
import QuizGenerator from "./pages/QuizGenerator";
import StudentAnalytics from "./pages/StudentAnalytics";
import StudentDashboard from "./pages/StudentDashboard";

function App() {
  return (
    <Router>

      <Routes>

        {/* Public Pages */}
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Teacher Layout (Sidebar + Pages) */}
        <Route element={<Layout />}>

          <Route path="/teacher-dashboard" element={<Dashboard />} />
          <Route path="/upload-notes" element={<UploadNotes />} />
          <Route path="/generate-quiz" element={<QuizGenerator />} />
          <Route path="/student-analytics" element={<StudentAnalytics />} />

        </Route>

        {/* Student Dashboard */}
        <Route path="/student-dashboard" element={<StudentDashboard />} />

      </Routes>

    </Router>
  );
}

export default App;