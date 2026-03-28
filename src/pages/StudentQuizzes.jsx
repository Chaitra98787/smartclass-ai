import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./StudentQuizzes.css";

function StudentQuizzes() {
  const [quizzes, setQuizzes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:5000/get-quizzes")
      .then(res => setQuizzes(res.data));
  }, []);

  return (
    <div className="quiz-page">

      <h2>Available Quizzes</h2>

      <div className="grid">
        {quizzes.map((q, i) => (
          <div className="card" key={i}>

            <h3>{q.classId}</h3>

            <p>
              ⏳ {new Date(q.deadline).toLocaleString()}
            </p>

            <p>{q.questions.length} Questions</p>

            <button onClick={() => navigate("/student-quiz", { state: q })}>
              Take Quiz →
            </button>

          </div>
        ))}
      </div>

    </div>
  );
}

export default StudentQuizzes;