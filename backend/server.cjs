const express = require("express");
const cors = require("cors");
const multer = require("multer");

const app = express();
app.use(cors());
app.use(express.json());

// ✅ file upload setup
const storage = multer.memoryStorage();
const upload = multer({ storage });

// ✅ ROUTE (THIS WAS MISSING)
app.post("/generate-quiz", upload.single("file"), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    // 👉 fake AI quiz (replace later with real logic)
    const quiz = [
      {
        question: "What is AI?",
        options: ["Technology", "Animal", "Car", "Game"],
        answer: "Technology",
      },
      {
        question: "What is React?",
        options: ["Library", "Language", "Database", "OS"],
        answer: "Library",
      },
    ];

    res.json({ quiz });

  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// ✅ start server
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});