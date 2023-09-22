import React from "react";
import { IconButton } from "@mui/material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import SentimentSatisfiedAltOutlinedIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import AttachFileOutlinedIcon from "@mui/icons-material/AttachFileOutlined";
import { useSelector } from "react-redux";
import MessageOthers from "./MessageOthers";
import MessageSelf from "./MessageSelf";
import { AnimatePresence, motion } from "framer-motion";

const ChatContainer = () => {
  const { background, color } = useSelector((state) => state.liveChat);
  const props = { name: "Test#1", timeStamp: "today" };
  return (
    <>
      <AnimatePresence></AnimatePresence>
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
            <div className="chat-header-text" style={{ color: color }}>
              <p className="con-title">{props.name}</p>
              <p className="con-timeStamp">{props.timeStamp}</p>
            </div>
          </div>
          <div className="icon">
            <IconButton>
              <DeleteOutlineOutlinedIcon style={{ color: color }} />
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
          <div className="icon">
            <IconButton>
              <SentimentSatisfiedAltOutlinedIcon style={{ color: color }} />
            </IconButton>
            <IconButton>
              <AttachFileOutlinedIcon style={{ color: color, transform: 'rotate(45deg)' }} />
            </IconButton>
          </div>
          <div className="input-box" style={{ flex: 1 }}>
            <input
              type="text"
              name="message"
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
              Type a message
            </span>
          </div>
          <div className="message-send-button">
            <IconButton>
              <SendOutlinedIcon style={{ color: color }} />
            </IconButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatContainer;
