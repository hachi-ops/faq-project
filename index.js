const express = require("express");
const app = express();

const cors = require("cors");
const pool = require("./db");
const path = require("path");
const PORT = process.env.PORT || 5000;

//process.env.PORT
//process.env.NODE_ENV => production or undefined

//middleware
app.use(cors());
app.use(express.json());

// app.use(express.static(path.join(__dirname, "client/build")));
app.use("/", express.static("./client/build"));

if (process.env.NODE_ENV === "production") {
  //server static content
  //npm run build
  app.use(express.static(path.join(__dirname, "client/build")));
}

console.log(__dirname);
console.log(path.join(__dirname, "client/build"));
//ROUTES//

//add a question

app.post("/questions", async (req, res) => {
  try {
    console.log(req.body);
    const { question, answer } = req.body;
    const newEntry = await pool.query(
      "INSERT INTO questions (question, answer) VALUES ($1,$2) RETURNING *",
      [question, answer]
    );
    // res.json(req.body);
    res.json(newEntry.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//update/edit a question
app.put("/questions/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { question } = req.body;
    const updateQuestion = await pool.query(
      "UPDATE questions SET question = $1 WHERE question_id = $2",
      [question, id]
    );
    res.json("Question updated");
  } catch (err) {
    console.error(err.message);
  }
});
//get all questions
app.get("/questions", async (req, res) => {
  try {
    const allQuestions = await pool.query("SELECT * FROM questions");
    res.json(allQuestions.rows);
  } catch (err) {
    console.error(err.message);
  }
});

//get a question
app.get("/questions/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const question = await pool.query(
      "SELECT * FROM questions WHERE question_id = $1",
      [id]
    );
    res.json(question.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//delete a question
app.delete("/questions/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteQuestion = await pool.query(
      "DELETE FROM questions WHERE question_id = $1",
      [id]
    );
    res.json("Question deleted");
  } catch (err) {
    console.error(err.message);
  }
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
