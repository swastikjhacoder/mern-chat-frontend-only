import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Message from "./Message";

const Messages = () => {
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
            {conversations.map((conversation, index) => {
              return <Message key={index} props={conversation} />;
            })}
          </motion.div>
        </AnimatePresence>
      </>
    );
};

export default Messages;
