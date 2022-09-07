import React from "react";
import { useState } from "react";

function AddAnswer({ id }) {
  const [answer, setAnswer] = useState("");
  console.log(answer);

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { answer };
      await fetch(`/questions-and-answers/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <>
      <form onSubmit={onSubmitForm}>
        <textarea
          type="text"
          placeholder="add answer"
          className="form-control"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />
        <button className="btn-form">ADD</button>
      </form>
    </>
  );
}

export default AddAnswer;
