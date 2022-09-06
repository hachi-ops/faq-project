import React from "react";
import { useState } from "react";

function AddQuestion() {
  const [question, setQuestion] = useState("");
  console.log(question);

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { question };

      await fetch("/questions", {
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
          placeholder="ask a question"
          className="form-control"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <button>Add</button>
      </form>
    </>
  );
}

export default AddQuestion;
