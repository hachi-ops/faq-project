import React, { useEffect, useState } from "react";
import ListQuestions from "../ListQuestions";

//components

const Dashboard = ({ setAuth }) => {
  const [name, setName] = useState("");
  const [allQuestions, setAllQuestions] = useState([]);
  const [questionsChange, setQuestionsChange] = useState(false);

  const getProfile = async () => {
    try {
      const res = await fetch("/dashboard/", {
        method: "GET",
        headers: { jwt_token: localStorage.token },
      });

      const parseData = await res.json();

      setAllQuestions(parseData);

      setName(parseData[0].user_name);
    } catch (err) {
      console.error(err.message);
    }
  };

  const logout = async (e) => {
    e.preventDefault();
    try {
      localStorage.removeItem("token");
      setAuth(false);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getProfile();
    setQuestionsChange(false);
  }, [questionsChange]);

  return (
    <div>
      <div className="d-flex mt-5 justify-content-around">
        <h2>{name} 's Questions List</h2>
        <button onClick={(e) => logout(e)} className="btn btn-primary">
          Logout
        </button>
      </div>

      {/* <ListQs
        allQuestions={allQuestions}
        setQuestionsChange={setQuestionsChange}
      /> */}
      <ListQuestions />
    </div>
  );
};

export default Dashboard;
