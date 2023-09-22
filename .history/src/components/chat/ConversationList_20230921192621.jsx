import React from "react";
import { motion } from "framer-motion";

const ConversationList = ({ props }) => {
  return (
    <>
      <motion.div className="conversation-container">
        <p className="con-icon">{props.name[0]}</p>
        <p className="con-title">{props.name}</p>
        <p className="con-lastMessage">{props.lastMessage}</p>
        <p className="con-timeStamp">{props.timeStamp}</p>
      </motion.div>
    </>
  );
};

export default ConversationList;
