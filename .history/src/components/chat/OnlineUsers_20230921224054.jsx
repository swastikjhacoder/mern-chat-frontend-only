import React from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const OnlineUsers = () => {
  const { background, color } = useSelector((state) => state.liveChat);
  return <div>OnlineUsers</div>;
};

export default OnlineUsers;
