import React from "react";
import { useSelector } from "react-redux";
import { Button } from "@mui/material";

const SignUp = ({ toggleForm }) => {
  const { color, background } = useSelector((state) => state.liveChat);
  return (
    <div className="signUp-container">
      
      <p className="create-account">
        Already have an Account?
        <button onClick={() => toggleForm()}>Login</button>
      </p>
    </div>
  );
};

export default SignUp;
