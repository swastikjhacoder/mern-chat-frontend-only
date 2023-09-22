import React from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const Group = () => {
  const { color } = useSelector((state) => state.liveChat);
  return <div>Group</div>;
};

export default Group;
