import React from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const ConversationList = ({ props }) => {
  const { mode, background, color } = useSelector((state) => state.liveChat);
  return (
    <>
      <motion.div
        whileHover={{ scale: 1.01, cursor: "pointer" }}
        whileTap={{ scale: 0.98 }}
        className="conversation-container"
      >
        <p className="con-icon" style={{ color: color, border: }}>
          {props.name[0]}
        </p>
        <p className="con-title" style={{ color: color }}>
          {props.name}
        </p>
        <p className="con-lastMessage" style={{ color: color }}>
          {props.lastMessage}
        </p>
        <p className="con-timeStamp" style={{ color: color }}>
          {props.timeStamp}
        </p>
      </motion.div>
    </>
  );
};

export default ConversationList;
