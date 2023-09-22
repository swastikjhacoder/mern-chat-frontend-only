import React from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import 

const MainContainer = () => {
  const user = useSelector((state) => state.liveChat.userInfo);
  return (
    <>
      <div className="main-container">{user ? "" : ""}</div>
      <Outlet />
    </>
  );
};

export default MainContainer;
