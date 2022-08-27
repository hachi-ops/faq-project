import React, { useState, useEffect } from "react";

function AdminPage() {
  const [questions, setQuestions] = useState([]);

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
      <div>
        <div>
          {questions.map((item) => (
            <div className="item">
              <h2>{item.question}</h2>
              <div>{item.answer}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default AdminPage;
