import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "../App.css";

function FAQ() {
  const [questions, setQuestions] = useState([]);

  async function getQuestions() {
    const res = await fetch("/answers");

    const questionsArray = await res.json();

    // console.log(questionsArray);
    setQuestions(questionsArray);
  }

  useEffect(() => {
    getQuestions();
  }, []);

  const navigate = useNavigate();
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  const [query, setQuery] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`/search/?query=${query}`);

      const parseResponse = await response.json();
      console.log(parseResponse);
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <>
      <button
        onClick={() => navigate("list-questions")}
        className="add-question-button"
      >
        Add Question
      </button>

      <form onSubmit={onSubmitForm}>
        <input
          type="text"
          name="query"
          placeholder="search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button>search</button>
      </form>

      <div className="wrapper">
        <div className="accordion">
          {questions.map((item, i) => (
            <div className="item">
              <div className="title" onClick={() => toggle(i)}>
                <h2>{item.question}</h2>
                <span>{selected === i ? "-" : "+"}</span>
              </div>
              <div className={selected === i ? "content show" : "content"}>
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default FAQ;
