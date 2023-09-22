import React from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const MainContainer = () => {
  return (
    <>
      <div className="main-container">

      </div>
      <Outlet />
    </>
  );
};

export default MainContainer;
