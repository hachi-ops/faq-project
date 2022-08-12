import { Routes, Route } from "react-router-dom";
import "./App.css";

import FAQ from "./pages/FAQ";
import Navbar from "./components/Navbar";
import SubmitAnswer from "./pages/SubmitAnswer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<FAQ />} />
        <Route path="submit-answer" element={<SubmitAnswer />} />
      </Routes>

      {/* <ListQuestions /> */}
      {/* <Login /> */}
    </>
  );
}

export default App;
