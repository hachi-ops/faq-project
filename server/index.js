const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json());

//ROUTES//

//add a question

app.post("/questions", async (req, res) => {
  try {
    const { question } = req.body;
    const newQuestion = await pool.query(
      "INSERT INTO questions (question) VALUES ($1) RETURNING *",
      [question]
    );
    // res.json(req.body);
    res.json(newQuestion.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//get all questions
app.get("/", async (req, res) => {
  try {
    const allQuestions = await pool.query("SELECT * FROM questions");
    res.json(allQuestions.rows);
  } catch (err) {
    console.error(err.message);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
