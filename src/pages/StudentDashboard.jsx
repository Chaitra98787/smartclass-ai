import { useState, useEffect } from "react";
import "./Dashboard.css";

function StudentDashboard() {

  const [quiz, setQuiz] = useState([]);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);

  // ✅ LOAD quiz from localStorage
  useEffect(() => {
    const storedQuiz = JSON.parse(localStorage.getItem("quiz"));
    if (storedQuiz) {
      setQuiz(storedQuiz);
    }
  }, []);

  const handleOptionChange = (qIndex, option) => {
    setAnswers({
      ...answers,
      [qIndex]: option,
    });
  };

  const handleSubmit = () => {
    let total = 0;

    quiz.forEach((q, i) => {
      if (answers[i] === q.answer) {
        total++;
      }
    });

    setScore(total);
  };

  return (
    <div className="dashboard">

      <div className="main-content">

        <h1>Student Dashboard</h1>

        <div className="dashboard-card">

          <h3>Take Quiz</h3>

          {quiz.length === 0 ? (
            <p>No quiz available</p>
          ) : (
            quiz.map((q, i) => (
              <div key={i}>
                <p><strong>{q.question}</strong></p>

                {q.options.map((opt, idx) => (
                  <div key={idx}>
                    <input
                      type="radio"
                      name={`q${i}`}
                      value={opt}
                      onChange={() => handleOptionChange(i, opt)}
                    />
                    {opt}
                  </div>
                ))}

                <br />
              </div>
            ))
          )}

          {quiz.length > 0 && (
            <button onClick={handleSubmit}>Submit</button>
          )}

          {score !== null && (
            <h3>Your Score: {score} / {quiz.length}</h3>
          )}

        </div>

      </div>

    </div>
  );
}

export default StudentDashboard;