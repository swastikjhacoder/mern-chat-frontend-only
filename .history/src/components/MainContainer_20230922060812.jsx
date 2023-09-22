import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./chat/SideBar";
import { useSelector } from "react-redux";
// import logo from "../Icons/icon_x512.png";
// import Login_SignUp from "./loginSignUp/Login_SignUp";

const MainContainer = () => {
  const { user, color } = useSelector((state) => state.liveChat);
  return (
    <>
      <div className="container">
        {/* {user ? (
          <>
            <SideBar />
            <Outlet />
          </>
        ) : (
          <>
            <div className="left-sidebar-container ">
              <div className="welcome-container">
                <div className="banner">
                  <img className="welcome-logo" src={logo} alt="logo" />
                  <p style={{ color: color }}>
                    View and text directly to people in the chat Rooms.
                  </p>
                </div>
              </div>
            </div>
            <div className="right-sidebar-container">
                <Login_SignUp/>
                <Outlet/>
            </div>
          </>
        )} */}
        <SideBar />
        <ChatW
        <Outlet/>
      </div>
    </>
  );
};

export default MainContainer;
