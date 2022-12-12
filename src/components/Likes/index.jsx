import React from "react";
import Header from "../common/Header";
import StoreList from "./StoreList";

export default function index() {
  return (
    <>
      <Header>찜한 가게</Header>
      <StoreList />
    </>
  );
}
