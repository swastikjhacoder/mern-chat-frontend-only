import { Button } from "@mui/material";
import React from "react";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.liveChat.mode);
  const userInfo = useSelector((state) => state.liveChat.userInfo);
  const isLoggedIn = useSelector((state) => state.liveChat.loggedIn);
  const background = useSelector( ( state ) => state.liveChat.background );
  console.log(mode);
  console.log(userInfo);
  console.log(isLoggedIn);
  console.log(userInfo);
  return (
    <>
      <Button>Click Me</Button>
    </>
  );
}

export default App;
