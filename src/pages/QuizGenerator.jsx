import { useState } from "react";

function QuizGenerator() {

  const [quiz, setQuiz] = useState([]);

  const generateQuiz = () => {

    const sample = [
      {
        question: "What is Machine Learning?",
        options: [
          "AI technique",
          "Database",
          "Framework",
          "OS"
        ]
      }
    ];

    setQuiz(sample);
  };

  return (
    <div>

      <h1>AI Quiz Generator</h1>

      <button onClick={generateQuiz}>
        Generate Quiz
      </button>

      {quiz.map((q, i)=>(
        <div key={i}>
          <h3>{q.question}</h3>
          {q.options.map((opt,j)=>(
            <p key={j}>• {opt}</p>
          ))}
        </div>
      ))}

    </div>
  );
}

export default QuizGenerator;