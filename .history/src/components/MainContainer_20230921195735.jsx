import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from './SideBar';
// import { useSelector } from "react-redux";
// import Login from "./loginSignup/Login";

const MainContainer = () => {
  // const user = useSelector((state) => state.liveChat.userInfo);
  // console.log(user);
  return (
    <>
      {/* <div className="container">
        { user ? <ChatContainer/> : <Login /> }
        
      </div> */}
      <ChatContainer />
      <Outlet />
    </>
  );
};

export default MainContainer;
