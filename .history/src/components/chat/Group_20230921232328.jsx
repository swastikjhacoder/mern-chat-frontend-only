import React from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const Group = () => {
  const { color } = useSelector((state) => state.liveChat);
  const props = { name: "Group Name" };
  return ();
};

export default Group;
