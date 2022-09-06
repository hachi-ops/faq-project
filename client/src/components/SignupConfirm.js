import React from "react";
import { useNavigate } from "react-router-dom";

function SignupConfirm() {
  const navigate = useNavigate();
  return (
    <>
      <div>AccountCreationConfrimation</div>
      <button onClick={() => navigate("/login")}>back</button>
    </>
  );
}

export default SignupConfirm;
