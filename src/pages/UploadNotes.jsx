import { useState } from "react";
import * as pdfjsLib from "pdfjs-dist/build/pdf";
import workerSrc from "pdfjs-dist/build/pdf.worker?url";

pdfjsLib.GlobalWorkerOptions.workerSrc = workerSrc;

import "./Dashboard.css";

function UploadNotes() {

  const [file, setFile] = useState(null);
  const [quiz, setQuiz] = useState([]);

  const handleUpload = async () => {

    if (!file) {
      alert("Select a file first");
      return;
    }

    const reader = new FileReader();

    reader.onload = async function () {

      const typedArray = new Uint8Array(this.result);

      const pdf = await pdfjsLib.getDocument(typedArray).promise;

      let text = "";

      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const content = await page.getTextContent();

        const strings = content.items.map(item => item.str);
        text += strings.join(" ");
      }

      console.log("Extracted:", text);

      generateQuiz(text);
    };

    reader.readAsArrayBuffer(file);
  };

  const generateQuiz = (text) => {

    const quizData = [
      {
        question: "What is the main topic?",
        options: [
          text.slice(0, 40),
          "Database",
          "Networking",
          "Operating System"
        ]
      },
      {
        question: "Which concept is mentioned?",
        options: [
          "Machine Learning",
          "HTML",
          "Photoshop",
          "Gaming"
        ]
      }
    ];

    setQuiz(quizData);
  };

  return (
    <div>

      <h1>Upload Lecture Notes</h1>

      <div className="dashboard-card">

        <input
          type="file"
          accept="application/pdf"
          onChange={(e) => setFile(e.target.files[0])}
        />

        <button className="upload-btn" onClick={handleUpload}>
          Upload & Generate Quiz
        </button>

      </div>

      {/* QUIZ */}
      {quiz.length > 0 && (
        <div className="quiz-section">

          <h2>Generated Quiz</h2>

          {quiz.map((q, i) => (
            <div key={i} className="quiz-card">

              <h4>{i + 1}. {q.question}</h4>

              {q.options.map((opt, j) => (
                <p key={j}>• {opt}</p>
              ))}

            </div>
          ))}

        </div>
      )}

    </div>
  );
}

export default UploadNotes;