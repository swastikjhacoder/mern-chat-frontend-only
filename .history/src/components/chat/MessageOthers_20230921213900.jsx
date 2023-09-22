import React from 'react'

const MessageOthers = () => {
  const props1 = {
    name: "OtherUser",
    message: "This is a sample message",
    timeStamp: "10.15",
  };
  return (
    <div className="other-message-container">
      <div className="other-icon" style={}>
        <p>{props1.name[0]}</p>
      </div>
      <div className="other-text-content">
        <p className="other-title ">{props1.name}</p>
        <p className="other-message">{props1.message}</p>
        <p className="other-timestamp">{props1.timeStamp}</p>
      </div>
    </div>
  );
};

export default MessageOthers