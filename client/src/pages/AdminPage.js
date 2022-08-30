import React, { useState, useEffect } from "react";
import AddAnswer from "../components/AddAnswer";

function AdminPage() {
  const [questions, setQuestions] = useState([]);

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
  async function getQuestions() {
    const res = await fetch("/questions-and-answers");

    const questionsArray = await res.json();

    // console.log(questionsArray);
    setQuestions(questionsArray);
  }

  useEffect(() => {
    getQuestions();
  }, []);
  return (
    <>
      {/* <div>
        <AddQuestion />
      </div> */}
      <table className="table mt-5">
        <thead>
          <tr>
            <th>Question</th>
            {/* <th>Edit Question</th>
            <th>Delete</th> */}
          </tr>
        </thead>
        <tbody>
          {questions.map((question) => (
            <tr key={question.id}>
              <td>{question.question}</td>

              <td>
                <AddAnswer id={question.id} />
              </td>
              <td>{question.answer}</td>
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

export default AdminPage;
