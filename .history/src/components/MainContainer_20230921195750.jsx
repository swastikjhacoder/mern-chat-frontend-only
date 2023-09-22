import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from '.';
// import { useSelector } from "react-redux";
// import Login from "./loginSignup/Login";

const MainContainer = () => {
  // const user = useSelector((state) => state.liveChat.userInfo);
  // console.log(user);
  return (
    <>
      {/* <div className="container">
        { user ? <SideBar/> : <Login /> }
        
      </div> */}
      <SideBar />
      <Outlet />
    </>
  );
};

export default MainContainer;
