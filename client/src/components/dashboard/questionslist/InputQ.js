import React, { useState } from "react";

const InputQ = ({ setQuestionsChange }) => {
  const [text, setText] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const myHeaders = new Headers();

      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("jwt_token", localStorage.token);

      const body = { text };
      const response = await fetch("/dashboard/questions", {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify(body),
      });

      const parseResponse = await response.json();

      console.log(parseResponse);

      setQuestionsChange(true);
      setText("");
      // window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <>
      <h1 className="text-center my-5">Ask a Question</h1>
      <form className="d-flex" onSubmit={onSubmitForm}>
        <input
          type="text"
          placeholder="add a question"
          className="form-control"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="btn btn-success ">Add</button>
      </form>
    </>
  );
};

export default InputQ;
