import React from 'react';
import { AnimatePresence, motion } from "framer-motion";
import { useSelector } from "react-redux";

const ChatWelcome = () => {
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
        <div className={"welcome-container" + " " + (mode ? "" : " " + "dark")}>
          <img className="welcome-logo" src={logo} alt="welcome-image" />
          <p>View and text directly to people in the chat Rooms.</p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default ChatWelcome