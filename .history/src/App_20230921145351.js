import { Button } from "@mui/material";
import React from "react";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.buyzon.productData);
  const userInfo = useSelector((state) => state.buyzon.userInfo);
  console.log(liveChat);
  return (
    <>
      <Button>Click Me</Button>
    </>
  );
}

export default App;
