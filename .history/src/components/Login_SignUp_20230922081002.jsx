import React, { useState } from 'react'
import logo from "../Icons/icon_x512.png";
import { useSelector } from "react-redux";
import { Button } from "@mui/material";

const Login = ({ toggleForm }) => {
  const { color, background } = useSelector((state) => state.liveChat);
  return (
    <>
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
    </>
  );
};

const SignUp = ({ toggleForm }) => {
  const { color, background } = useSelector((state) => state.liveChat);
  return (
    <>
      <div className="signUp-container">
        <div className="signUp">
          <p>Register your Account</p>
          <div className="input-box">
            <div className="input-box">
              <input
                type="text"
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
                Name
              </span>
            </div>
          </div>
          <div className="input-box">
            <div className="input-box">
              <input
                type="email"
                name="email"
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
                Email
              </span>
            </div>
          </div>
          <div className="input-box">
            <div className="input-box">
              <input
                type="text"
                name="mobile"
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
                Mobile
              </span>
            </div>
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
          <div className="input-box">
            <div className="input-box">
              <input
                type="file"
                name="profile"
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
                Profile Picture
              </span>
            </div>
          </div>
          <Button variant="contained" size="large" style={{ width: "150px" }}>
            Register
          </Button>
        </div>
        <p className="create-account">
          Already have an Account?
          <Button
            variant="outlined"
            style={{ marginLeft: "10px" }}
            onClick={toggleForm()}
          >
            Register
          </Button>
        </p>
      </div>
    </>
  );
};

const Login_SignUp = () => {
  const [action, setAction] = useState("signUp");
  const [accountInfo, setAccountInfo] = useState("Don't have an Account?");
  const [loginLoaded, setLoginLoaded] = useState(true);
  const toggleForm = () => {
    setAction("login");
    setAccountInfo("Already have an Account?");
    setLoginLoaded(!loginLoaded);
  };
  return <></>;
};

export default Login_SignUp