import React from "react";
import { useParams } from "react-router-dom";
import { categoryName } from "../../utils/common";
import Header from "../common/Header";
import StoreList from "./StoreList";

export default function Index() {
  const { category } = useParams();

  return (
    <>
      <Header>{category ? categoryName[category] : "찜한 가게"}</Header>
      <StoreList />
    </>
  );
}
