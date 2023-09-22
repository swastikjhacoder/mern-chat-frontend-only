import React, { useState } from "react";
import SignUp from "./SignUp";

const Login = () => {
  const [ newUser, setNewUser ] = useState( false );
  const toggleLogin = () =>
  { 
    setNewUser( !newUser );
  };
  return (
    <>
      <div className="right-sidebar-container">
        {newUser? <><SignUp</>}
      </div>
    </>
  );
};

export default Login;
