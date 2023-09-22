import React from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const user = useSelector((state) => state.liveChat.userInfo);
  return (
    <>
      <div className="main-container">{user ? "" : <Logi}</div>
      <Outlet />
    </>
  );
};

export default MainContainer;
