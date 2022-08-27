import React, { useState, useEffect } from "react";
import AddQuestion from "../components/AddQuestion";
// import EditQuestion from "../components/EditQuestion";

function AskQuestion() {
  const [questions, setQuestions] = useState([]);

  async function getQuestions() {
    const res = await fetch("/questions");

    const questionsArray = await res.json();

    // console.log(questionsArray);
    setQuestions(questionsArray);
  }

  useEffect(() => {
    getQuestions();
  }, []);

  // delete question function
  async function deleteQuestion(id) {
    try {
      await fetch(`/questions-and-answers/${id}`, {
        method: "DELETE",
      });
      setQuestions(questions.filter((question) => question.id !== id));
    } catch (err) {
      console.error(err.message);
    }
  }
  return (
    <>
      <div>
        <AddQuestion />
      </div>
      <table className="table mt-5">
        <thead>
          <tr>
            <th>Question</th>
            {/* <th>Add</th> */}
            {/* <th>Edit Question</th> */}
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {questions.map((question) => (
            <tr key={question.id}>
              <td>{question.question}</td>
              {/* 
              <td>
                <button>Add</button>
              </td> */}
              {/* <td>
                <EditQuestion question={question} />
              </td> */}
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteQuestion(question.id)}
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
}

export default AskQuestion;
