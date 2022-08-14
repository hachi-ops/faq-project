// import React, { useState } from "react";

// function AddAnswer() {
//   const [answer, setAnswer] = useState("");

//   function handleAddAnswer(e) {
//     // console.log(e.target.value);
//     setAnswer(e.target.value);
//   }
//   return (
//     <form>
//       <input
//         type="text"
//         placeholder="type your answer..."
//         onChange={handleAddAnswer}
//       />
//       <button>submit</button>
//     </form>
//   );
// }

// export default AddAnswer;

import React from "react";
import { useState } from "react";

function AddAnswer() {
  const [answer, setAnswer] = useState("");
  console.log(answer);

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { answer };
      await fetch("/questions", {
        method: "POST",
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
      <form className="d-flex" onSubmit={onSubmitForm}>
        <input
          type="text"
          placeholder="add answer"
          className="form-control"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />
        <button className="btn btn-success">ADD</button>
      </form>
    </>
  );
}

export default AddAnswer;
