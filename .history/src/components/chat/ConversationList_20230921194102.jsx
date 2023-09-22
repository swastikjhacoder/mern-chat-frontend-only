import React from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const ConversationList = ({ props }) => {
  return (
    <>
      <motion.div
        whileHover={{ scale: 1.01, cursor: "pointer" }}
        whileTap={{ scale: 0.98 }}
        className="conversation-container"
      >
        <p className="con-icon">{props.name[0]}</p>
        <p className="con-title">{props.name}</p>
        <p className="con-lastMessage">{props.lastMessage}</p>
        <p className="con-timeStamp">{props.timeStamp}</p>
      </motion.div>
    </>
  );
};

export default ConversationList;
