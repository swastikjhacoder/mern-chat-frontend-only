import React from "react";
import { useSelector } from "react-redux";
import { Button} from '@mui/material';

const Login = ({ toggleForm }) => {
  const { color, background } = useSelector((state) => state.liveChat);
  return (
    <div className="login-container">
      <p>Login to your Account</p>
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
      <p className="create-account">
        Don't have an Account? 
        <Button variant="outlined" style={{marginLeft}}>Register</Button>
      </p>
    </div>
  );
};

export default Login;
