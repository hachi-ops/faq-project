import React, { useState, useEffect } from "react";

function ListQuestions() {
  const [questions, setQuestions] = useState([]);
  async function getQuestions() {
    const res = await fetch("http://localhost:5000/questions");

    const questionsArray = await res.json();

    // console.log(questionsArray);
    setQuestions(questionsArray);
  }

  useEffect(() => {
    getQuestions();
  }, []);

  console.log(questions);
  return (
    <>
      <table className="table mt-5">
        <thead>
          <tr>
            <th>Question</th>
            <th>Add answer</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {questions.map((question) => (
            <tr>
              <td>{question.question}</td>
              <td>Add answer</td>
              <td>Delete</td>
            </tr>
          ))}
          {/*    <tr>
           
          </tr>*/}
        </tbody>
      </table>
    </>
  );
}

export default ListQuestions;
