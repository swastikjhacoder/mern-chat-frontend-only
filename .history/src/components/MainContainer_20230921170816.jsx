import React from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "./loginSignup/Login";
import ChatContainer from "./chat/ChatContainer";

const MainContainer = () => {
  const user = useSelector((state) => state.liveChat.userInfo);
  console.log(user);
  return (
    <>
      <div className="container">
        { user ? <ChatContainer/> : <Login /> }
        
      </div>
      <Outlet />
    </>
  );
};

export default MainContainer;
