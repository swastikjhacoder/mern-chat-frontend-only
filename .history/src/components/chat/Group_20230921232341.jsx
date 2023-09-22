import React from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const Group = () => {
  const { color } = useSelector((state) => state.liveChat);
  const props = { name: "Group Name" };
  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      className={"online-groups-container"
    >
      <p className={"con-title">
        {props.name}
      </p>
    </motion.div>
  );
};

export default Group;
