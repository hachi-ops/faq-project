import React from "react";

function AddQuestion() {
  return (
    <>
      <h1 className="text-center my-5">Add Question</h1>
      <form className="d-flex">
        <input
          type="text"
          placeholder="add question"
          className="form-control"
        />
        <button className="btn btn-success">ADD</button>
      </form>
    </>
  );
}

export default AddQuestion;
