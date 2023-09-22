import React from 'react'

const MessageSelf = () => {
  const props2 = {
    name: "You",
    message: "This is a sample message",
    timeStamp: "12.10",
  };
  return (
    <div className="self-message-box">
      <p className="con-title ">{props2.name}</p>
      <p className="con-lastMessage">{props2.message}</p>
      <p className="con-timeStamp">{props2.timeStamp}</p>
    </div>
  );
};

export default MessageSelf