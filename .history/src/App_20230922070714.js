// import { Button } from "@mui/material";
// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { toggleDarkMode, addUser, removeUser } from './redux/liveChatSlice';

// function App() {
//   const dispatch = useDispatch();
//   const mode = useSelector((state) => state.liveChat.mode);
//   const userInfo = useSelector((state) => state.liveChat.userInfo);
//   const background = useSelector( ( state ) => state.liveChat.background );
//   console.log(mode);
//   console.log(userInfo);
//   console.log(background);
//   return (
//     <>
//       <Button onClick={() => dispatch(toggleDarkMode())}>Click Me</Button>
//     </>
//   );
// }

// export default App;

import React from "react";
import { useSelector } from "react-redux";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import ChatContainer from "./components/chat/ChatContainer";
import OnlineUsersGroup from "./components/chat/OnlineUsersGroup";
import GroupList from "./components/chat/GroupList";
import CreateGroup from "./components/chat/CreateGroup";
import ChatWelcome from "./components/chat/ChatWelcome";
import Login_SignUp from "./components/Login_SignUp";

const App = () => {
  const background = useSelector((state) => state.liveChat.background);
  return (
    <>
      <div style={{ backgroundColor: background }} className="app-container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login_SignUp />}>
              <Route path="/" element={<Lo />} />
              <Route path="register" element={<ChatContainer />} />
            </Route>
            <Route path="app" element={<MainContainer />}>
              <Route path="welcome" element={<ChatWelcome />} />
              <Route path="chat" element={<ChatContainer />} />
              <Route path="users" element={<OnlineUsersGroup />} />
              <Route path="create-groups" element={<CreateGroup />} />
              <Route path="groups" element={<GroupList />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
