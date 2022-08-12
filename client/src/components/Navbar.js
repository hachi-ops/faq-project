import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="primary-nav">
      <NavLink to="/">FAQ</NavLink>
      <NavLink to="list-questions">Q/A</NavLink>
    </nav>
  );
}

export default Navbar;
