import React, { useState } from "react";
import SignUp from "./SignUp";

const Login = () => {
  return (
    <>
      <div className="right-sidebar-container">
        {newUser ? <SignUp /> : <Login />}
      </div>
    </>
  );
};

export default Login;
