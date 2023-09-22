import React from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Logi

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
