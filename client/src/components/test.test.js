import React from "react";
import { createRoot } from "react-dom/client";
// import { getQueriesForElement, screen } from "@testing-library/dom";
import AddQuestion from "./AddQuestion";
import AddAnswer from "./AddAnswer";
import ListQuestion from "./ListQuestions";

import "@testing-library/jest-dom/extend-expect";

//AddQuestion render component
it("renders AddQuestion component", () => {
  const root = document.createElement("div");
  createRoot(root).render(<AddQuestion />);
});

//AddAnswer render component
it("renders AddAnswer component", () => {
  const root = document.createElement("div");
  createRoot(root).render(<AddAnswer />);
});

//ListQuestion render component
it("renders ListQuestion component", () => {
  const root = document.createElement("div");
  createRoot(root).render(<ListQuestion />);
});

//NavBar render component
// test("renders FAQ Nav Link", () => {
//   const root = document.createElement("div");
//   createRoot(root).render(<Navbar />);
//   const input = screen.queryByText("FAQ");
//   console.log(input);
//   expect(input).not.toBeNull;
// });
