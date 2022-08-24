const express = require("express");
const app = express();

const cors = require("cors");
const pool = require("./db");
const path = require("path");
// const { REFUSED } = require("dns");
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

//add a question--page:Q/A

app.post("/unanswered", async (req, res) => {
  try {
    const { question } = req.body;
    const newQuestion = await pool.query(
      "INSERT INTO questions (question) VALUES ($1) RETURNING *",
      [question]
    );
    res.json(req.body);
  } catch (err) {
    console.error(err.message);
  }
});

//add an answer to an unanswered question-Q/A
app.put("/unanswered/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { answer } = req.body;
    const addAnswer = await pool.query(
      "UPDATE questions SET answer = $1 WHERE id = $2",
      [answer, id]
    );
    res.json(req.body);
  } catch (err) {
    console.error(err.message);
  }
});

//get unanswered questions(page 2: Add Answer)--
app.get("/unanswered", async (req, res) => {
  try {
    const unanswered = await pool.query(
      "SELECT * FROM questions WHERE answer IS NULL"
    );
    res.json(allUnansweredQuestions.rows);
  } catch (err) {
    console.error(err.message);
  }
});

//get all answered questions (page 1: FAQ)
app.get("/answered", async (req, res) => {
  try {
    const answered = await pool.query(
      "SELECT * FROM questions WHERE answer IS NOT NULL"
    );
    res.json(allQuestions.rows);
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
