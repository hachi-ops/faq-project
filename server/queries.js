const Pool = require("pg").Pool;
const pool = new Pool({
  user: "me",
  host: "localhost",
  database: "faq",
  password: "password",
  port: 5432,
});

const getQuestions = (request, response) => {
  pool.query("SELECT * FROM questions ORDER BY id ASC", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const getQuestionById = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query(
    "SELECT * FROM questions WHERE id = $1",
    [id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

const createQuestion = (request, response) => {
  const { question, answer } = request.body;

  pool.query(
    "INSERT INTO questions (question, answer) VALUES ($1, $2) RETURNING *",
    [question, answer],
    (error, results) => {
      if (error) {
        throw error;
      }
      response
        .status(201)
        .send(`Question added with ID: ${results.rows[0].id}`);
    }
  );
};

const updateQuestion = (request, response) => {
  const id = parseInt(request.params.id);
  const { question, answer } = request.body;

  pool.query(
    "UPDATE questions SET question = $1, answer = $2 WHERE id = $3",
    [question, answer, id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).send(`Question modified with ID: ${id}`);
    }
  );
};

const deleteQuestion = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query("DELETE FROM questions WHERE id = $1", [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).send(`Question deleted with ID: ${id}`);
  });
};

module.exports = {
  getQuestions,
  getQuestionById,
  createQuestion,
  updateQuestion,
  deleteQuestion,
};
