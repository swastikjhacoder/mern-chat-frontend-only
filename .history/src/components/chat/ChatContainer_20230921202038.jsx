import React from "react";
import { useSelector } from "react-redux";

const ChatContainer = () => {
  const { background, color } = useSelector((state) => state.liveChat);
  return (
    <>
      <div className="right-sidebar-container">
        <div className="chat-header">Header</div>
        <div className="chat-message">Message</div>
        <div className="chat-input">
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatContainer;
