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

const App = () => {
  const background = useSelector( ( state ) => state.liveChat.background );
  console.log( background );
  return (
    <>
      <div style={{ backgroundColor: background }} className="app-container">
        <button style={{width: '150px', height:'40px'}}>Hello</button>
      </div>
    </>
  );
};

export default App;
