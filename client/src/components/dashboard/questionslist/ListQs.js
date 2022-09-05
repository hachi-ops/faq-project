import React, { useState, useEffect } from "react";
import EditQ from "./EditQ";

const ListQs = ({ allQuestions, setQuestionsChange }) => {
  console.log(allQuestions);
  const [questions, setQuestions] = useState([]); //empty array

  //delete todo function

  async function deleteQ(id) {
    try {
      await fetch(`/dashboard/todos/${id}`, {
        method: "DELETE",
        headers: { jwt_token: localStorage.token },
      });

      setQuestions(questions.filter((question) => question.question_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  }

  // async function getTodos() {
  //   const res = await fetch("http://localhost:5000/todos");

  //   const todoArray = await res.json();

  //   setTodos(todoArray);
  // }

  useEffect(() => {
    setQuestions(allQuestions);
  }, [allQuestions]);

  console.log(questions);

  return (
    <>
      {" "}
      <table className="table mt-5">
        <thead>
          <tr>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {/*<tr>
            <td>John</td>
            <td>Doe</td>
            <td>john@example.com</td>
          </tr> */}

          {questions.length !== 0 &&
            questions[0].question_id !== null &&
            questions.map((question) => (
              <tr key={question.question_id}>
                <td>{question.text}</td>
                <td>
                  <EditQ
                    question={question}
                    setQuestionsChange={setQuestionsChange}
                  />
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteQ(question.question_id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};

export default ListQs;
