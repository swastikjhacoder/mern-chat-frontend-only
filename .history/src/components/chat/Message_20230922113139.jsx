import React from 'react'

const Message = () => {
  const { background, color } = useSelector((state) => state.liveChat);
  return <div>Message</div>;
};

export default Message