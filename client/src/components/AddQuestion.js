import React from "react";
import { useState } from "react";

function AddQuestion() {
  const [question, setQuestion] = useState("");
  console.log(question);

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { question };
      //proxy is only used ind development so it will be ignored in production
      // so if there is no http://localhost:5000 then by default it is going to use heroku domain
      //this heroku app is just for our server serving the buid static content and also holding the restful api

      //https://faq-project-demo.herokuapp.com/questions

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
        <button className="btn btn-success">ADD</button>
      </form>
    </>
  );
}

export default AddQuestion;
