import React from 'react'

const MessageOthers = () => {
  const props1 = {
    name: "OtherUser",
    message: "This is a sample message",
    timeStamp: "10.15",
  };
  return (
    <div className="other-message-container">
      <div className="other-icon">
        <p>{props1.name[0]}</p>
      </div>
      <div className={"other-text-content" + " " + (mode ? "" : " " + "dark")}>
        <p className={"other-title" + " " + (mode ? "" : " " + "dark")}>
          {props1.name}
        </p>
        <p className={"other-message" + " " + (mode ? "" : " " + "dark")}>
          {props1.message}
        </p>
        <p className={"other-timeStamp" + " " + (mode ? "" : " " + "dark")}>
          {props1.timeStamp}
        </p>
      </div>
    </div>
  );
};

export default MessageOthers