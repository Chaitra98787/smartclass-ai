import "./QuizGenerator.css";

function QuizGenerator() {
  return (
    <div className="quiz-container">

      <h2>Create Quiz</h2>

      {/* FILE UPLOAD */}
      <div className="upload-box">
        <label className="file-label">
          Choose File
          <input type="file" hidden />
        </label>
        <p>Select quiz file</p>
      </div>

      {/* CLASS SELECT */}
      <select className="input">
        <option>Select Class</option>
        <option>CSSE Sem 1</option>
        <option>AIML 'A' Sem 5</option>
        <option>CSIT Sem 3</option>
      </select>

      {/* DATE + TIME */}
      <div className="datetime">
        <input type="date" className="input" />
        <input type="time" className="input" />
      </div>

      {/* BUTTON */}
      <button className="upload-btn">Upload Quiz</button>

    </div>
  );
}

export default QuizGenerator;