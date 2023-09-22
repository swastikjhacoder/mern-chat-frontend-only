import React from "react";
import { useSelector } from "react-redux";
import { Button } from "@mui/material";

const Login = ({ toggleForm }) => {
  const { color, background } = useSelector((state) => state.liveChat);
  return (
    <div className="login-container">
      <div className="login">
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
        </div>
        <Button variant="contained" size="large" style={{ width: "100px" }}>
          Login
        </Button>
      </div>
      <div className="create-account">
        <p style={{ color: color }}>
          Don't have an Account?
          <Button
            variant="outlined"
            style={{ marginLeft: "10px" }}
            onClick={toggleForm()}
          >
            Register
          </Button>
        </p>
      </div>
    </div>
  );
};

export default Login;
