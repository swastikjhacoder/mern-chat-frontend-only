import React from "react";
import { useSelector } from "react-redux";
import { Button } from "@mui/material";
import {useNavigate} from 'rea'

const Login = ({ toggleForm }) => {
  const navigate = useNavigate();
  const { color, background } = useSelector((state) => state.liveChat);
  return (
    <>
      <div className="right-sidebar-container">
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
          <Button variant="outlined" size="large">
            Large
          </Button>
          <p className="create-account" style={{ color: color }}>
            Don't have an Account?
            <Button variant="text">Text</Button>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
