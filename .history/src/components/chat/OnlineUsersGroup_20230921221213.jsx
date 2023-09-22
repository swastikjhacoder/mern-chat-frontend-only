import React from "react";
import { IconButton } from "@mui/material";
import PersonAddAlt1OutlinedIcon from "@mui/icons-material/PersonAddAlt1Outlined";
import { AnimatePresence, motion } from "framer-motion";
import { useSelector } from "react-redux";
import OnlineUsers from "./OnlineUsers";

const OnlineUsersGroup = () => {
  const { background, color } = useSelector((state) => state.liveChat);
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{
          ease: "anticipate",
          duration: "0.3",
        }}
        className="list-container"
      >
        <div className="online-users-header">
          <div className="icon">
            <PersonAddAlt1OutlinedIcon />
          </div>
          <p>Online Users</p>
        </div>
        <div className="sb-search">
          <div className="input-box">
            <input
              type="search"
              name="search"
              required="required"
              style={{ border: `1px solid ${color}`, color: color, flex: 1 }}
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
        <div className="online-users-list">
          <OnlineUsers />
          <OnlineUsers />
          <OnlineUsers />
          <OnlineUsers />
          <OnlineUsers />
          <OnlineUsers />
          <OnlineUsers />
          <OnlineUsers />
          <OnlineUsers />
          <OnlineUsers />
          <OnlineUsers />
          <OnlineUsers />
          <OnlineUsers />
          <OnlineUsers />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default OnlineUsersGroup;
