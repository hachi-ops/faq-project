import React from "react";
import { useNavigate } from "react-router-dom";

function AccountCreationConfrimation() {
  const navigate = useNavigate();
  return (
    <>
      <div>AccountCreationConfrimation</div>
      <button onClick={() => navigate(-1)}>back</button>
    </>
  );
}

export default AccountCreationConfrimation;
