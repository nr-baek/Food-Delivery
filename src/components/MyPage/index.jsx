import React from "react";
import Header from "../common/Header";
import InfoEdit from "./InfoEdit";
import OrderList from "./OrderList";

function index() {
  return (
    <>
      <Header>My Page</Header>
      <InfoEdit />
      <OrderList />
    </>
  );
}

export default index;
