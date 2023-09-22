import React from "react";
import { Outlet } from "react-router-dom";

const MainContainer = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default MainContainer;
