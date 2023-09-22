import { Button } from "@mui/material";
import React from "react";
import {useSelector, useDispatch } from 'react-redux';

function App ()
{
  const dispatch = useDispatch();
  const liceChat = useSelector((stat))
  return (
    <>
    <Button>Click Me</Button>
    </>
  );
}

export default App;
