import React from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Login from './Login';

const MainContainer = () => {
  const user = useSelector((state) => state.liveChat.userInfo);
  return (
    <>
      <div className="main-container">{user ? "" : <Login}</div>
      <Outlet />
    </>
  );
};

export default MainContainer;
