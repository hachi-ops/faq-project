import React from "react";
import { useNavigate } from "react-router-dom";

import AddQuestion from "./AddQuestion";
import { useAuth } from "./auth";

function Profile() {
  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.logout();
    navigate("/");
  };
  return (
    <>
      <h1>Welcome {auth.user}</h1>
      <button onClick={handleLogout}>Logout</button>
      <AddQuestion />
    </>
  );
}

export default Profile;
