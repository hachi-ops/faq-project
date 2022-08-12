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

// import React from "react";
// import { useState } from "react";

// function AddQuestion() {
//   const [question, setQuestion] = useState("");
//   console.log(question);

//   const onSubmitForm = async (e) => {
//     e.preventDefault();
//     try {
//       const body = { question };
//       await fetch("http://localhost:5000/questions", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(body),
//       });

//       window.location = "/";
//     } catch (err) {
//       console.error(err.message);
//     }
//   };
//   return (
//     <>
//       <h1 className="text-center my-5">Add Question</h1>
//       <form className="d-flex" onSubmit={onSubmitForm}>
//         <input
//           type="text"
//           placeholder="add question"
//           className="form-control"
//           value={question}
//           onChange={(e) => setQuestion(e.target.value)}
//         />
//         <button className="btn btn-success">ADD</button>
//       </form>
//     </>
//   );
// }

// export default AddQuestion;
