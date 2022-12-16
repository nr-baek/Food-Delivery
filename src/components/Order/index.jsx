import React from "react";
import Header from "../common/Header";
import Empty from "./Empty";
import OrderInfo from "./OrderInfo";
import { GrayWrapper } from "./styles";

function Index() {
  return (
    <GrayWrapper>
      <Header prevBtn={true} delBtn={true}>
        주문하기
      </Header>
      <Empty />
      {/* <OrderInfo /> */}
    </GrayWrapper>
  );
}

export default Index;
