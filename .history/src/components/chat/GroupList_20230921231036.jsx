import React from "react";
import { IconButton } from "@mui/material";
import GroupAddOutlinedIcon from "@mui/icons-material/GroupAddOutlined";
import Group from "./Group";
import { AnimatePresence, motion } from "framer-motion";
import { useSelector } from "react-redux";

const GroupList = () => {
  const { background, color } = useSelector((state) => state.liveChat);
    return (
      
  );
};

export default GroupList;
