import React from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "./Login";
import ChatContainer from "./ChatContainer";

const MainContainer = () => {
  const user = useSelector( ( state ) => state.liveChat.userInfo );
  console.log( user );
  return (
    <>
      <div className="main-container">
        {/* { user ? <ChatContainer/> : <Login /> } */ }
        <ChatContainer
      </div>
      <Outlet />
    </>
  );
};

export default MainContainer;
