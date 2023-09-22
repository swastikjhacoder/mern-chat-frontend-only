import { Button } from "@mui/material";
import React from "react";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const {liveChat} = useSelector((state) => {
    state.liveChat;
  });
  console.log(liveChat);
  return (
    <>
      <Button>Click Me</Button>
    </>
  );
}

export default App;
