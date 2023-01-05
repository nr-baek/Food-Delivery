import React from "react";
import Header from "../common/Header";
import UserInfo from "./UserInfo";
import OrderList from "./OrderList";

function Index() {
  return (
    <>
      <Header>My Page</Header>
      <UserInfo />
      <OrderList />
    </>
  );
}

export default Index;
