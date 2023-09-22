import React from "react";
import { useSelector } from "react-redux";
import { Button } from "@mui/material";

const SignUp = ({ toggleForm }) => {
  const { color, background } = useSelector((state) => state.liveChat);
  return (
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
          Login
        </Button>
      </div>
      <p className="create-account">
        Already have an Account?
        <button onClick={() => toggleForm()}>Login</button>
      </p>
    </div>
  );
};

export default SignUp;
