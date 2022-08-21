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
    console.log(req.body);
    const { question } = req.body;
    const newEntry = await pool.query(
      "INSERT INTO questions (question) VALUES ($1) RETURNING *",
      [question]
    );
    // res.json(req.body);
    res.json(newEntry.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//add an answer
app.post("/questions", async (req, res) => {
  try {
    const newEntry = await pool.query("UPDATE questions (answer) VALUES ($1)", [
      answer,
    ]);
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
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// const express = require("express");
// const bodyParser = require("body-parser");
// const app = express();
// const db = require("./queries");
// const port = 5050;

// app.use(bodyParser.json());
// app.use(
//   bodyParser.urlencoded({
//     extended: true,
//   })
// );

// app.get("/", (request, response) => {
//   response.json({ info: "Node.js, Express, and Postgres API" });
// });

// app.get("/faq-questions", db.getQuestions);
// app.get("/faq-questions/:id", db.getQuestionById);
// app.post("/faq-questions", db.createQuestion);
// app.put("/faq-questions/:id", db.updateQuestion);
// app.delete("/faq-questions/:id", db.deleteQuestion);

// app.listen(port, () => {
//   console.log(`App running on port ${port}.`);
// });
