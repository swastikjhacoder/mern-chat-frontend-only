import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./chat/SideBar";
import { useSelector } from "react-redux";
import Login from "./loginSignup/Login";

const MainContainer = () => {
  const user = useSelector((state) => state.liveChat.userInfo);
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
