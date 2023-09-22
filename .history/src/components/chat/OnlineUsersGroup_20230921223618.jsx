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
        className="right-sidebar-container"
      >
        <div className="online-users-header">
          <div>
            
          </div>
          <p style={{ color: color }}>Online Users</p>
        </div>
        <div className="online-users-search">
          <div className="input-box" style={{ flex: 1 }}>
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
