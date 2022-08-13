import React from "react";
import { useState } from "react";

function AddQuestion() {
  const [question, setQuestion] = useState("");
  console.log(question);

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { question };
      await fetch("http://localhost:5000/questions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      window.location = "/list-questions";
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <>
      <form className="d-flex" onSubmit={onSubmitForm}>
        <input
          type="text"
          placeholder="add question"
          className="form-control"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <button className="btn btn-success">ADD</button>
      </form>
    </>
  );
}

export default AddQuestion;
