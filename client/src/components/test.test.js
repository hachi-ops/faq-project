import { idleTimeoutMillis } from "pg/lib/defaults";
import React from "react";
import { createRoot } from "react-dom/client";
import { getQueriesForElement, screen, render } from "@testing-library/dom";
import AddQuestion from "./AddQuestion";
import AddAnswer from "./AddAnswer";
import ListQuestion from "./ListQuestions";
import Navbar from "./Navbar";
import App from "../App";

//AddQuestion render component
it("renders AddQuestion component", () => {
  const root = document.createElement("div");
  createRoot(root).render(<AddQuestion />);
  //   expect(root.querySelector("<button><button/>".textConent).toBe("ADD"))
  //   const { getByText, getByLabelText,getByPlaceholderText, getByRole } = getQueriesForElement(root);
  //   expect(getByPlaceholderText("ask a question")).not.toBeNull();
});

// test("Extract button node with getByText", () => {
//   const root = document.createElement("div");
//   createRoot(root).render(<AddQuestion />);
//   const button = screen.getByRole('add-button');
//   expect(button).toBeInTheDocument();
//   //   const root = document.createElement("div");
//   //   createRoot(root).render(<AddQuestion />);
//   //   const button = screen.findAllByRole("button");
//   //   expect(button).toHaveLength(1);
//   //   expect(button).not.toBeNull();
// });

// it("should render ADD button", async () => {
//   const root = document.createElement("div");
//   createRoot(root).render(<AddAnswer />);
//   const buttonElement = screen.getByTestId("add-button");
//   expect(buttonElement).toBeInTheDocument();
// });

//AddAnswer render component
it("renders AddAnswer component", () => {
  const root = document.createElement("div");
  createRoot(root).render(<AddAnswer />);
});

//ListQuestion render component
it("renders ListQuestion component", () => {
  const root = document.createElement("div");
  createRoot(root).render(<ListQuestion />);
  //   expect(root.querySelector("<button><button/>".textConent).toBe("ADD"))
  // const { getByText, getByLabelText, getByPlaceholderText, getByRole } =
  //   getQueriesForElement(root);
});

//NavBar render component
it("renders NavBar image", () => {
  const root = document.createElement("div");
  createRoot(root).render(<Navbar />);
  //   expect(root.querySelector("<button><button/>".textConent).toBe("ADD"))
  // const {
  //   getByText,
  //   getByLabelText,
  //   getByPlaceholderText,
  //   getByRole,
  //   getByAltText,
  // } = getQueriesForElement(root);

  // expect(getByAltText("CodeYourFuture logo")).not.toBeNull();

  //const exampleInput = screen.getByText(/FAQ/)
});

// test("renders FAQ link", () => {
//   const root = document.createElement("div");
//   createRoot(root).render(<App />);
//   const linkElement = screen.getByText(/FAQ/i);
//   expect(linkElement).toBeInTheDocument();
// });
