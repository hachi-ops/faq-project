import React, { useEffect, useState } from "react";

//components

import InputQ from "./questionslist/InputQ";
import ListQs from "./questionslist/ListQs";

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

      <InputQ setQuestionsChange={setQuestionsChange} />
      <ListQs
        allQuestions={allQuestions}
        setQuestionsChange={setQuestionsChange}
      />
    </div>
  );
};

export default Dashboard;
