import { Routes, Route } from "react-router-dom";
import "./App.css";

import FAQ from "./pages/FAQ";
import Navbar from "./components/Navbar";
import SubmitQuestionAnswer from "./pages/SubmitQuestionAnswer";
// import AccountCreationConfrimation from "./components/AccountCreationConfrimation";
// import QuestionsWithCategories from "./components/QuestionsWithCategories";

// import Login from "./pages/Login";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<FAQ />} />
        <Route
          path="submit-question-answer"
          element={<SubmitQuestionAnswer />}
        />
        {/* <Route
          path="account-creation-confirmation"
          element={<AccountCreationConfrimation />}
        /> */}
        {/* <Route
          path="questions-with-categories"
          element={<QuestionsWithCategories />}
        />
        </Route> */}
      </Routes>

      {/* <ListQuestions /> */}
      {/* <Login /> */}
    </>
  );
}

export default App;
