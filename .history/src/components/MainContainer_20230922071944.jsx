import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./chat/SideBar";

const MainContainer = () => {
  return (
    <>
      <div className="container">
        <SideBar />
        <Outlet />
      </div>
    </>
  );
};

export default MainContainer;
