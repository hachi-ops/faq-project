// import React, { useState } from "react";

// const EditQ = ({ question, setQuestionsChange }) => {
//   //editText function

//   const editText = async (id) => {
//     try {
//       const body = { text };

//       const myHeaders = new Headers();

//       myHeaders.append("Content-Type", "application/json");
//       myHeaders.append("jwt_token", localStorage.token);

//       await fetch(`/dashboard/questions/${id}`, {
//         method: "PUT",
//         headers: myHeaders,
//         body: JSON.stringify(body),
//       });

//       setQuestionsChange(true);

//       // window.location = "/";
//     } catch (err) {
//       console.error(err.message);
//     }
//   };

//   const [text, setText] = useState(question.text);
//   return (
//     <>
//       <button
//         type="button"
//         className="btn btn-warning"
//         data-toggle="modal"
//         data-target={`#id${question.question_id}`}
//       >
//         Edit
//       </button>
//       {/* id = "id21"*/}
//       <div
//         className="modal"
//         id={`id${question.question_id}`}
//         onClick={() => setText(question.text)}
//       >
//         <div className="modal-dialog">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h4 className="modal-title">Edit Question</h4>
//               <button
//                 type="button"
//                 className="close"
//                 data-dismiss="modal"
//                 onClick={() => setText(question.text)}
//               >
//                 &times;
//               </button>
//             </div>

//             <div className="modal-body">
//               <input
//                 type="text"
//                 className="form-control"
//                 value={text}
//                 onChange={(e) => setText(e.target.value)}
//               />
//             </div>

//             <div className="modal-footer">
//               <button
//                 type="button"
//                 className="btn btn-warning"
//                 data-dismiss="modal"
//                 onClick={() => editText(question.question_id)}
//               >
//                 Edit
//               </button>
//               <button
//                 type="button"
//                 className="btn btn-danger"
//                 data-dismiss="modal"
//                 onClick={() => setText(question.text)}
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default EditQ;
