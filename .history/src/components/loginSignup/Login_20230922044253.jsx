import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, NavLink } from "react-router-dom";
import {} from '@mui'

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
            Don't have an Account?&nbsp;&nbsp;
            <NavLink to="register">Register</NavLink>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
