import { useState } from "react";
import axios from "axios";

function QuizGenerator() {
  const [file, setFile] = useState(null);
  const [quiz, setQuiz] = useState([]);
  const [loading, setLoading] = useState(false);

  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState([]);

  const handleGenerate = async () => {
    if (!file) {
      alert("Upload file first");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      setLoading(true);

      const res = await axios.post(
        "http://localhost:5000/generate-quiz",
        formData
      );

      setQuiz(res.data.quiz);
      setAnswers(new Array(res.data.quiz.length).fill(null));

    } catch (err) {
      alert("Error generating quiz");
    }

    setLoading(false);
  };

  // ✅ select option
  const handleSelect = (option) => {
    const updated = [...answers];
    updated[currentQ] = option;
    setAnswers(updated);
  };

  // ✅ navigation
  const nextQ = () => {
    if (currentQ < quiz.length - 1) {
      setCurrentQ(currentQ + 1);
    }
  };

  const prevQ = () => {
    if (currentQ > 0) {
      setCurrentQ(currentQ - 1);
    }
  };

  // ✅ score
  const score = answers.filter(
    (ans, i) => ans === quiz[i]?.answer
  ).length;

  return (
    <div style={{ padding: "30px" }}>
      <h2>AI Quiz Generator 🤖</h2>

      {/* Upload */}
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <br /><br />
      <button onClick={handleGenerate}>Generate Quiz</button>

      {loading && <p>Generating... ⏳</p>}

      {/* QUIZ */}
      {quiz.length > 0 && (
        <div style={{ marginTop: "30px" }}>

          {/* Progress */}
          <h3>
            Question {currentQ + 1} / {quiz.length}
          </h3>

          {/* Question */}
          <p style={{ fontSize: "18px", fontWeight: "bold" }}>
            {quiz[currentQ].question}
          </p>

          {/* Options */}
          {quiz[currentQ].options.map((opt, i) => (
            <div
              key={i}
              onClick={() => handleSelect(opt)}
              style={{
                padding: "10px",
                margin: "10px 0",
                border: "1px solid #ccc",
                borderRadius: "8px",
                cursor: "pointer",
                background:
                  answers[currentQ] === opt ? "#d0e7ff" : "#f5f5f5",
              }}
            >
              {opt}
            </div>
          ))}

          {/* Buttons */}
          <div style={{ marginTop: "20px" }}>
            <button onClick={prevQ}>Previous</button>
            <button onClick={nextQ} style={{ marginLeft: "10px" }}>
              Next
            </button>
          </div>

          {/* Score */}
          <div style={{ marginTop: "20px" }}>
            <h3>
              Score: {score} / {quiz.length}
            </h3>
          </div>

        </div>
      )}
    </div>
  );
}

export default QuizGenerator;