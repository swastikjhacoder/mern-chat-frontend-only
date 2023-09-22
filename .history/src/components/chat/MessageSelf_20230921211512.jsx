import React from 'react'

const MessageSelf = () => {
  const props2 = {
    name: "You",
    message: "This is a sample message",
    timeStamp: "12.10",
  };
  return (
    <div
      className={"self-message-container" + " " + (mode ? "" : " " + "dark")}
    >
      <div className={"self-message-box" + " " + (mode ? "" : " " + "dark")}>
        <p className={"self-title" + " " + (mode ? "" : " " + "dark")}>
          {props2.name}
        </p>
        <p className={"self-message" + " " + (mode ? "" : " " + "dark")}>
          {props2.message}
        </p>
        <p className={"self-timeStamp" + " " + (mode ? "" : " " + "dark")}>
          {props2.timeStamp}
        </p>
      </div>
    </div>
  );
};

export default MessageSelf