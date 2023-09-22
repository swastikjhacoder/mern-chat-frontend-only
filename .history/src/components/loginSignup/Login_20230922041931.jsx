import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, NavLink } from "react-router-dom";

const Login = ( { toggleForm } ) =>
{
  const navigate = useNavigate();
  const { color, background } = useSelector((state) => state.liveChat);
  return (
    <>
      <div className="right-sidebar-container">
        .login
      </div>
    </>
  );
};

export default Login;
