import { Routes, Route } from "react-router-dom";
import "./App.css";

import FAQ from "./pages/FAQ";
import Navbar from "./components/Navbar";

import ListQuestions from "./components/ListQuestions";
import AskQuestion from "./pages/AskQuestion";

import AdminPage from "./pages/AdminPage";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<FAQ />} />
        <Route path="ask-question" element={<AskQuestion />} />
        <Route path="list-questions" element={<ListQuestions />} />

        <Route path="admin" element={<AdminPage />} />
      </Routes>
    </>
  );
}

export default App;
