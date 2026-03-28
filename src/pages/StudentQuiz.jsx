import { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

function StudentQuiz() {
  const { state: quiz } = useLocation();

  const [answers, setAnswers] = useState(
    new Array(quiz.questions.length).fill(null)
  );
  const [currentQ, setCurrentQ] = useState(0);

  const handleSelect = (opt) => {
    const updated = [...answers];
    updated[currentQ] = opt;
    setAnswers(updated);
  };

  const score = answers.filter(
    (a, i) => a === quiz.questions[i]?.answer
  ).length;

  const handleSubmit = async () => {
    await axios.post("http://localhost:5000/submit-quiz", {
      student: "Student1",
      classId: quiz.classId,
      score
    });

    alert("Submitted!");
  };

  return (
    <div style={{ padding: "30px" }}>
      <h2>{quiz.classId}</h2>
      <p>Deadline: {quiz.deadline}</p>

      <h3>
        Question {currentQ + 1} / {quiz.questions.length}
      </h3>

      <p>{quiz.questions[currentQ].question}</p>

      {quiz.questions[currentQ].options.map((opt, i) => (
        <div
          key={i}
          onClick={() => handleSelect(opt)}
          style={{
            padding: "10px",
            margin: "10px 0",
            border: "1px solid #ccc",
            cursor: "pointer",
            background:
              answers[currentQ] === opt ? "#d0e7ff" : "#f5f5f5"
          }}
        >
          {opt}
        </div>
      ))}

      <button onClick={() => setCurrentQ(currentQ - 1)}>Prev</button>
      <button onClick={() => setCurrentQ(currentQ + 1)}>Next</button>

      <br /><br />

      <button onClick={handleSubmit}>Submit</button>

      <h3>Score: {score}</h3>
    </div>
  );
}

export default StudentQuiz;