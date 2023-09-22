import React from 'react';
import SideBar from './SideBar';

const ChatContainer = () => {
  return (
    <div className="container">
      <div className="left-sidebar-container">
        <SideBar/>
      </div>
      <div className="right-sidebar-container"></div>
    </div>
  );
}

export default ChatContainer