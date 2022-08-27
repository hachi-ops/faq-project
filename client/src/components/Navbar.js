import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="primary-nav">
      <img
        src="https://codeyourfuture.io/wp-content/uploads/2019/03/cyf_brand.png"
        width="100rem"
        alt="CodeYourFuture logo"
      ></img>
      <NavLink to="/">FAQ</NavLink>
      <NavLink to="ask-a-question">Ask a Question</NavLink>
      <NavLink to="answer-a-question">Add Answer</NavLink>
    </nav>
  );
}

export default Navbar;
