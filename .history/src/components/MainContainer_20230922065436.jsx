import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./chat/SideBar";
import { useSelector } from "react-redux";
// import logo from "../Icons/icon_x512.png";

const MainContainer = () => {
  const { user, color } = useSelector((state) => state.liveChat);
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
