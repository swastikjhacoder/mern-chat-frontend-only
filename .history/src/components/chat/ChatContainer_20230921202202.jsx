import React from "react";
import { useSelector } from "react-redux";

const ChatContainer = () => {
  const { background, color } = useSelector((state) => state.liveChat);
  const props = { name: "Test#1", timeStamp: "today" };
  return (
    <>
      <div className="right-sidebar-container">
        <div className="chat-header">
          <p className="con-icon">{props.name[0]}</p>
        </div>
        <div className="chat-message">Message</div>
        <div className="chat-input">Input</div>
      </div>
    </>
  );
};

export default ChatContainer;
