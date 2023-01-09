import React from "react";
import Header from "../common/Header";
import UserInfo from "./UserInfo";
import OrderList from "./OrderList";
import { useUserId } from "store";
import UnLoggedMember from "./UnLoggedMember";
import MoveToLoginPage from "./MoveToLoginPage";

function Index() {
  const userId = useUserId();

  return (
    <>
      <Header>My Page</Header>
      {userId ? <UserInfo /> : <MoveToLoginPage />}
      {userId ? <OrderList /> : <UnLoggedMember />}
    </>
  );
}

export default Index;
