import { Routes, Route } from "react-router-dom";
import "./App.css";

import FAQ from "./pages/FAQ";
import Navbar from "./components/Navbar";

// import ListQuestions from "./components/ListQuestions";
import AskQuestion from "./pages/AskQuestion";
import AddAnswer from "./pages/AddAnswer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<FAQ />} />
        <Route path="answer-a-question" element={<AddAnswer />} />
        <Route path="ask-a-question" element={<AskQuestion />} />
      </Routes>
    </>
  );
}

export default App;
