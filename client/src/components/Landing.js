import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="jumbotron mt-5">
      <h1>Welcome to CYF Frequently Asked Questions</h1>
      <p>Sign In to ask and answer questions</p>
      <Link to="/login">
        <button> Login</button>
      </Link>
      <Link to="/register">
        <button>Register</button>
      </Link>
    </div>
  );
};

export default Landing;
