import React from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const OnlineUsers = () => {
  const { color } = useSelector((state) => state.liveChat);
  const props = { name: "Online User" };
    return (
      <motion.div
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
        className="online-users-container"
      >
        <p className="con-icon">
          {props.name[0]}
        </p>
        <p className={"con-title">
          {props.name}
        </p>
      </motion.div>
    );
};

export default OnlineUsers;
