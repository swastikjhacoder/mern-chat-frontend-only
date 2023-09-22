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
import { Routes, Route } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import SignUp from "./components/loginSignUp/SignUp";
import ChatContainer from "./components/chat/ChatContainer";
import OnlineUsersGroup from "./components/chat/OnlineUsersGroup";
import GroupList from "./components/chat/GroupList";
import CreateGroup from "./components/chat/CreateGroup";
import Login from "./components/loginSignUp/LoginSignUp";
import Login_SignUp from "./components/loginSignUp/Login_SignUp";

const App = () => {
  const background = useSelector((state) => state.liveChat.background);
  return (
    <>
      <div style={{ backgroundColor: background }} className="app-container">
        <Routes>
          <Route path="/" element={<MainContainer />}>
            <Route path="login-register" element={<LoginSignUp />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<SignUp />} />
            <Route path="chat" element={<ChatContainer />} />
            <Route path="users" element={<OnlineUsersGroup />} />
            <Route path="groups" element={<GroupList />} />
            <Route path="create-group" element={<CreateGroup />} />
          </Route>
        </Routes>
      </div>
    </>
  );
};

export default App;
