import React from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const OnlineUsers = () => {
  const { color } = useSelector((state) => state.liveChat);
  const props = { name: "Online User" };
  return <div>OnlineUsers</div>;
};

export default OnlineUsers;
