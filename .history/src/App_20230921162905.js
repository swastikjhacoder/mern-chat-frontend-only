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
import { useSelector, useDispatch } from "react-redux";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import Login from "./components/Login";

const App = () => {
  const background = useSelector( ( state ) => state.liveChat.background );
  console.log( background );
  return (
    <>
      <div style={{ backgroundColor: background }} className="app-container">
        <Routes>
          <Route path="/" element={<MainContainer />}>
            <Route path="login" element={<Login />} />
            <Route path="login" element={<Login />} />
          </Route>
        </Routes>
      </div>
    </>
  );
};

export default App;
