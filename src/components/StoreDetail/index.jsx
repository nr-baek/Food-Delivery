import React from "react";
import Header from "../common/Header";
import StoreInfo from "./StoreInfo";
import StoreDetailMain from "./StoreDetailMain";
import StorePrice from "./StorePrice";

function Index() {
  return (
    <>
      <Header prevBtn={true}>푸라닭 자양점</Header>
      <StoreInfo />
      <StorePrice />
      <StoreDetailMain />
    </>
  );
}

export default Index;
