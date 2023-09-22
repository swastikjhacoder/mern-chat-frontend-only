import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Button } from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [ newUser, setNewUser ] = useState( true );
  const { color, background } = useSelector( ( state ) => state.liveChat );
  
  const toggleForm = () =>
  { 
    setNewUser( !newUser );
  };
  return (
    <>
      <div className="right-sidebar-container">
        {
          newUser ? <>
          <div className="login-container">
          <p style={{ color: color }}>Login to your Account</p>
          <div className="input-box">
            <input
              type="name"
              name="name"
              required="required"
              style={{ border: `1px solid ${color}`, color: color }}
            />
            <span
              style={{
                color: color,
                border: `1px solid ${color}`,
                background: background,
              }}
            >
              Email/ Mobile
            </span>
          </div>
          <div className="input-box">
            <input
              type="password"
              name="password"
              required="required"
              style={{ border: `1px solid ${color}`, color: color }}
            />
            <span
              style={{
                color: color,
                border: `1px solid ${color}`,
                background: background,
              }}
            >
              Password
            </span>
          </div>
          <Button variant="outlined" size="large" style={{ width: "150px"}}>
            Login
          </Button>
          <p className="create-account" style={{ color: color }}>
            Don't have an Account?
            <Button
              variant="text"
              onClick={() => {
                navigate("register");
              } }
              style={{fontSize: '24px'}}
            >
              Register
            </Button>
          </p>
        </div>
          </>
            :
            <>
            
            </>
        }
      </div>
      <Outlet/>
    </>
  );
};

export default Login;
