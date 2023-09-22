import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./chat/SideBar";
import { useSelector } from "react-redux";
import Login from "./loginSignup/Login";
import logo from "../Icons/icon_x512.png";

const MainContainer = () => {
  const user = useSelector((state) => state.liveChat);
  return (
    <>
      <div className="container">
        {user ? (
          <>
            <SideBar />
            <Outlet />
          </>
        ) : (
          <>
            <div className="left-sidebar-container ">
              <div className="welcome-container">
                <img className="welcome-logo" src={logo} alt="welcome-image" />
                <p>View and text directly to people in the chat Rooms.</p>
              </div>
            </div>
            <div className="right-sidebar-container">
              <Login />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default MainContainer;
