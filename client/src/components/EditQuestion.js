import React, { useState } from "react";

const EditQuestion = ({ question }) => {
  const [newQuestion, setNewQuestion] = useState(question.newQuestion);

  //edit question function

  const updateQuestion = async (id, e) => {
    e.preventDefault();
    try {
      const body = { newQuestion };
      const response = await fetch(`/questions/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      console.log(response);
      // console.log(body)
      // response.json(response);
      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-warning"
        data-toggle="modal"
        data-target={`#id${question.question_id}`}
      >
        Edit
      </button>

      <div
        className="modal"
        id={`id${question.question_id}`}
        onClick={() => setNewQuestion(question.newQuestion)}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Edit Question</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                onClick={() => setNewQuestion(question.newQuestion)}
              >
                &times;
              </button>
            </div>

            <div className="modal-body">
              <input
                type="text"
                className="form-control"
                value={newQuestion}
                onChange={(e) => setNewQuestion(e.target.value)}
              />
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-warning"
                data-dismiss="modal"
                onClick={(e) => updateQuestion(e)}
                // disabled={!newQuestion}
              >
                Edit
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
                onClick={() => setNewQuestion(question.newQuestion)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditQuestion;
