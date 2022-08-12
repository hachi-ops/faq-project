import React, { useState, useEffect } from "react";
import AddAnswer from "./AddAnswer";
// import EditQuestion from "./EditQuestion";

function ListQuestions() {
  const [questions, setQuestions] = useState([]);

  // //delete question function
  // async function deleteQuestion(id) {
  //   try {
  //     await fetch(`http://localhost:5000/questions/${id}`, {
  //       method: "DELETE",
  //     });
  //     setQuestions(questions.filter((question) => question.question_id !== id));
  //   } catch (err) {
  //     console.error(err.message);
  //   }
  // }
  async function getQuestions() {
    const res = await fetch("http://localhost:5000/questions");

    const questionsArray = await res.json();

    // console.log(questionsArray);
    setQuestions(questionsArray);
  }

  useEffect(() => {
    getQuestions();
  }, []);

  // console.log(questions);
  return (
    <>
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
            <tr key={question.question_id}>
              <td>{question.question}</td>
              <td>
                <AddAnswer />
              </td>
              {/* <td>
                <EditQuestion question={question} />
              </td> */}
              {/* <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteQuestion(question.question_id)}
                >
                  Delete
                </button>
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default ListQuestions;
