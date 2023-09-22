import React from "react";
import { IconButton } from "@mui/material";
import DoneOutlineOutlinedIcon from "@mui/icons-material/DoneOutlineOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { AnimatePresence, motion } from "framer-motion";
import { useSelector } from "react-redux";

const CreateGroup = () => {
  const { background, color } = useSelector((state) => state.liveChat);
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{
          ease: "anticipate",
          duration: "0.3",
        }}
        className="create-group-container"
      >
        <div className="create-group-header">
          <IconButton>
            <AddCircleOutlineOutlinedIcon className="icon" />
          </IconButton>
          <p>Create new Groups</p>
        </div>
        <div className="create-group-input">
          <div className="input-box">
            <input
              type="search"
              name="search"
              required="required"
              style={{ border: `1px solid ${color}`, color: color }}
            />
            <span
              style={{
                color: color,
                border: `1px solid ${color}`,
                background: background,
              }}
            >
              Enter Group Name
            </span>
          </div>
          <IconButton>
            <DoneOutlineOutlinedIcon />
          </IconButton>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CreateGroup;
