import { Button } from "@mui/material";
import React from "react";
import {useSelector, useDispatch } from 'react-redux';

function App ()
{
  const dispatch = useDispatch
  return (
    <>
    <Button>Click Me</Button>
    </>
  );
}

export default App;
