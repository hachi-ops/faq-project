import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="primary-nav">
      <NavLink to="/">FAQ</NavLink>
      {/* <NavLink to="/submit-question-answer">Submit Q/A</NavLink> */}
      {/* <NavLink to="/questions-with-categories">Search</NavLink> */}
    </nav>
  );
}

export default Navbar;
