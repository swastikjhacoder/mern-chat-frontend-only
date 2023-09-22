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
        className={"online-users-container" + " " + (mode ? "" : " " + "dark")}
      >
        <p className={"con-icon" + " " + (mode ? "" : " " + "dark")}>
          {props.name[0]}
        </p>
        <p className={"con-title" + " " + (mode ? "" : " " + "dark")}>
          {props.name}
        </p>
      </motion.div>
    );
};

export default OnlineUsers;
