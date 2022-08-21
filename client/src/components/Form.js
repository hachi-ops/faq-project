import React, { useState, useEffect } from "react";
import data from "../data";

function Form() {
  const [userInput, setUserInput] = useState("");
  console.log(userInput);

  function onSubmitForm(e) {
    e.preventDefault();
    try {
      const body = { userInput };
      fetch("http://localhost:5000/questions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  }
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
  const [items, setItems] = React.useState(data);
  //   const newData = data;
  //   const displayData = newData.map((item) => (
  //     <div key={item}>{item.question}</div>
  //   ));

  //   function addItem() {
  //     const newQuestion = `Question ${newData.length + 1}`;
  //     data.push(newQuestion);
  //     console.log(newData);
  //   }

  function addItem() {
    const newQuestion = `Question ${items.length + 1}`;
    setItems((prevState) => [...prevState, newQuestion]);
  }
  const displayData = items.map((item) => (
    <div key={item}>{item.question}</div>
  ));

  function handleClick() {
    console.log("I was clicked");
  }
  let randQuestion;
  function getRandomQuestion() {
    const questionsArray = data;
    const randomQuestion = Math.floor(Math.random() * questionsArray.length);
    // console.log(randomQuestion);
    randQuestion = questionsArray[randomQuestion].question;
    console.log(randQuestion);
  }

  function getData() {
    const questionsArray = data;
    console.log(data);
    console.log(questionsArray);
  }
  return (
    <>
      <form onSubmit={onSubmitForm}>
        <p>{randQuestion}</p>
        <input type="text" placeholder="add question..." />
        <input
          type="text"
          placeholder="add answer..."
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        {/* <button onClick={handleClick}>add question</button> */}
        <button>add answer</button>
        {/* <button onClick={getRandomQuestion}>get random question</button>
        <button onClick={getData}>get data</button>
        <button onClick={addItem}>add Item</button>
        {displayData} */}
      </form>
      {/* {questions.map((question) => (
        <div>
          <ul>
            <li>{question.question}</li>
            <li>{question.answer}</li>
          </ul>
        </div>
      ))} */}
    </>
  );
}

export default Form;
