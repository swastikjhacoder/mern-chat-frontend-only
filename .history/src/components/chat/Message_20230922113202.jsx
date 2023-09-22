import React from 'react';
import { useSelector } from "react-redux";
import { , motion } from "framer-motion";

const Message = () => {
  const { background, color } = useSelector((state) => state.liveChat);
  return <div>Message</div>;
};

export default Message