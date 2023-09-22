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
            <Login
            </>
        )}
      </div>
    </>
  );
};

export default MainContainer;
