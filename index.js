const express = require("express");
const app = express();

const cors = require("cors");
const pool = require("./db");
const path = require("path");
const { REFUSED } = require("dns");
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
    const { question } = req.body;
    const newEntry = await pool.query(
      "INSERT INTO questions (question) VALUES ($1) RETURNING *",
      [question]
    );
    res.json(req.body);
    // res.json(newEntry.rows[0]); //this line is cursed
  } catch (err) {
    console.error(err.message);
  }
});

// //add an answer
// app.put("/questions/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { answer } = req.body;
//     const updateQuestion = await pool.query(
//       "UPDATE questions SET answer = $1 WHERE id = $2",
//       [answer, id]
//     );
//     res.json(req.body);
//   } catch (err) {
//     console.error(err.message);
//   }
// });
//get all answered questions (page 1: FAQ)
app.get("/answers", async (req, res) => {
  try {
    const allQuestions = await pool.query(
      "SELECT * FROM questions WHERE answer IS NOT NULL"
    );
    res.json(allQuestions.rows);
  } catch (err) {
    console.error(err.message);
  }
});

//get unanswered questions(page 2: Add Answer)
app.get("/questions", async (req, res) => {
  try {
    const allUnansweredQuestions = await pool.query(
      "SELECT * FROM questions WHERE answer IS NULL"
    );
    res.json(allUnansweredQuestions.rows);
  } catch (err) {
    console.error(err.message);
  }
});

//get a question (answered and unanswered)
app.get("/questions-and-answers/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const answer = await pool.query("SELECT * FROM questions WHERE id = $1", [
      id,
    ]);
    res.json(answer.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//get all questions and answers

app.get("/questions-and-answers", async (req, res) => {
  try {
    const all = await pool.query("SELECT * FROM questions");
    res.json(all.rows);
  } catch (err) {
    console.error(err.message);
  }
});

//delete a question
app.delete("/questions/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteQuestion = await pool.query(
      "DELETE FROM questions WHERE id = $1",
      [id]
    );
    res.json("Question deleted");
  } catch (err) {
    console.error(err.message);
  }
});

//delete an answer (without deleting question)

//???

//edit unanswered question
app.put("/questions/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { question } = req.body;
    const updateQuestion = await pool.query(
      "UPDATE questions SET question = $1 WHERE id = $2",
      [question, id]
    );
    res.json(req.body);
  } catch (err) {
    console.error(err.message);
  }
});

//add an answer to an unanswered question
app.put("/questions-and-answers/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { answer } = req.body;
    const updateAnswer = await pool.query(
      "UPDATE questions SET answer = $1 WHERE id = $2",
      [answer, id]
    );
    res.json(req.body);
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
