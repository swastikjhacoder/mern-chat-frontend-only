import React from "react";
import { IconButton } from "@mui/material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import { useSelector } from "react-redux";
import MessageOthers from "./MessageOthers";
import MessageSelf from "./MessageSelf";

const ChatContainer = () => {
  const { color } = useSelector((state) => state.liveChat);
  const props = { name: "Test#1", timeStamp: "today" };
  return (
    <>
      <div className="right-sidebar-container">
        <div className="chat-header">
          <div className="chat-header-info">
            <p
              className="con-icon"
              style={{
                color: color,
                border: `1px solid ${color}`,
              }}
            >
              {props.name[0]}
            </p>
            <div className="chat-header-text">
              <p className="con-title">{props.name}</p>
              <p className="con-timeStamp">{props.timeStamp}</p>
            </div>
          </div>
          <div className="icon">
            <IconButton>
              <DeleteOutlineOutlinedIcon />
            </IconButton>
          </div>
        </div>
        <div className="chat-message">
          <MessageOthers />
          <MessageSelf />
          <MessageOthers />
          <MessageSelf />
          <MessageOthers />
          <MessageSelf />
          <MessageOthers />
          <MessageSelf />
          <MessageOthers />
          <MessageSelf />
          <MessageOthers />
          <MessageSelf />
          <MessageOthers />
          <MessageSelf />
        </div>
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
          <div className="message-send-button">
            <IconButton>
              <SendOutlinedIcon />
            </IconButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatContainer;
