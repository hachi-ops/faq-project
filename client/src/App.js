import { Routes, Route } from "react-router-dom";
import "./App.css";

import FAQ from "./pages/FAQ";
import Navbar from "./components/Navbar";

import ListQuestions from "./components/ListQuestions";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<FAQ />} />
        <Route path="list-questions" element={<ListQuestions />} />
      </Routes>
    </>
  );
}

export default App;
