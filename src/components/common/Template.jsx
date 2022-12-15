import React from "react";
import { Outlet } from "react-router-dom";
import BottomMenu from "./BottomMenu";

function Template() {
  return (
    <>
      <Outlet />
      <BottomMenu />
    </>
  );
}

export default Template;
