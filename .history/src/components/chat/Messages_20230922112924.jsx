import React from "react";
import { useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";

const Messages = () => {
  const { background, color } = useSelector((state) => state.liveChat);
  const conversations = [
    {
      name: "Test#1",
      lastMessage: "Last Message #1",
      timeStamp: "today",
    },
    {
      name: "Test#2",
      lastMessage: "Last Message #2",
      timeStamp: "today",
    },
    {
      name: "Test#3",
      lastMessage: "Last Message #3",
      timeStamp: "today",
    },
  ];
    return (
      <>
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
            <p
              className="con-icon"
              style={{
                color: color,
                border: `1px solid ${color}`,
              }}
            >
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
        </AnimatePresence>
      </>
    );
};

export default Messages;
