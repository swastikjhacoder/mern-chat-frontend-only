import React from "react";
import { useSelector } from "react-redux";

const ChatContainer = () => {
  return (
    <>
      <div className="right-sidebar-container">
        <div className="chat-header">Header</div>
        <div className="chat-message">Message</div>
        <div className="chat-input">
          <div className="input-box">
            <input
              type="search"
              name="search"
              required="required"
              style={{ border: `1px solid ${color}`, color: color }}
            />
            <span
              style={{
                color: color,
                border: `1px solid ${color}`,
                background: background,
              }}
            >
              Search
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatContainer;
