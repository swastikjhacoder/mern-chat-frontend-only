import React from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const background = useSelector((state) => state.liveChat.background);
  return (
    <>
      <div className="main-container"></div>
      <Outlet />
    </>
  );
};

export default MainContainer;
