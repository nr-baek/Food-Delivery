import React from "react";
import Header from "../common/Header";
import StoreInfo from "./StoreInfo";
import StoreDetailMain from "./StoreDetailMain";
import StorePrice from "./StorePrice";
import PrevButton from "../common/PrevButton";

function Index() {
  return (
    <>
      <Header>푸라닭 자양점</Header>
      <StoreInfo />
      <StorePrice />
      <StoreDetailMain />
      <PrevButton />
    </>
  );
}

export default Index;
