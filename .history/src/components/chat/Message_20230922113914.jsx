import React from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Message = ({ props }) => {
  const navigate = useNavigate();
    const { color } = useSelector( ( state ) => state.liveChat );
    const handleRoute = () =>
    { 
        navigate
    };
  return (
    <>
      <motion.div
        whileHover={{ scale: 1.01, cursor: "pointer" }}
        whileTap={{ scale: 0.98 }}
        className="conversation-container"
        onClick={() => {
            () =>
            {
                handleRoute();
            }
        }}
      >
        <p
          className="con-icon"
          style={{
            color: color,
            border: `1px solid ${color}`,
          }}
        >
          {props.name[0]}
        </p>
        <p className="con-title" style={{ color: color }}>
          {props.name}
        </p>
        <p className="con-lastMessage" style={{ color: color }}>
          {props.lastMessage}
        </p>
        <p className="con-timeStamp" style={{ color: color }}>
          {props.timeStamp}
        </p>
      </motion.div>
    </>
  );
};

export default Message;
