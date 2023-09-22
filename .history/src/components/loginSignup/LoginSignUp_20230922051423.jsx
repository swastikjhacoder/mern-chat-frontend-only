import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Button } from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [ newUser, setNewUser ] = useState( false );
  const { color, background } = useSelector( ( state ) => state.liveChat );

  const handleRegister = () =>
  { 
    setNewUser( !newUser );
    navigate( 'register' );
  };
  return (
    <>
      <div className="right-sidebar-container">
        {newUser ? (
          <>
          
          </>
        ) : (
          <>
            
          </>
        )}
      </div>
      <Outlet />
    </>
  );
};

export default Login;
