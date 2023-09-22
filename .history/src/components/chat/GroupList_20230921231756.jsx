import React from "react";
import { IconButton } from "@mui/material";
import GroupAddOutlinedIcon from "@mui/icons-material/GroupAddOutlined";
import Group from "./Group";
import { AnimatePresence, motion } from "framer-motion";
import { useSelector } from "react-redux";

const GroupList = () => {
  const { background, color } = useSelector((state) => state.liveChat);
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
            <div className="online-groups-header">
              <div>
                <IconButton>
                  <GroupAddOutlinedIcon className="icon" />
                </IconButton>
              </div>
              <p>All Groups</p>
            </div>
            <div className="group-search"></div>
            <div className="group-list">
              <Group />
              <Group />
              <Group />
              <Group />
              <Group />
              <Group />
              <Group />
              <Group />
              <Group />
              <Group />
              <Group />
              <Group />
              <Group />
            </div>
          </motion.div>
        </AnimatePresence>
      </>
    );
};

export default GroupList;
