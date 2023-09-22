import React from "react";
import { IconButton } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PersonAddAlt1OutlinedIcon from "@mui/icons-material/PersonAddAlt1Outlined";
import { AnimatePresence, motion } from "framer-motion";
import { useSelector } from "react-redux";
import OnlineUsers from "./OnlineUsers";

const OnlineUsersGroup = () => {
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
          <div className="online-users-logo">
            <PersonAddAlt1OutlinedIcon />
          </div>
          <p>Online Users</p>
        </div>
        <div className="sb-search">
          <IconButton>
            <SearchOutlinedIcon />
          </IconButton>
          <input className="sb-search-box" placeholder="search" />
        </div>
              <div className="ou-conversations">
                  <OnlineUsers
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default OnlineUsersGroup;
