import React from "react";
import { useParams } from "react-router-dom";
import { categoryName } from "../../utils/common";
import Header from "../common/Header";
import CategoryStoreList from "./CategoryStoreList";
import LikesStoreList from "./LikesStoreList";

export default function Index() {
  const { category } = useParams();

  return (
    <>
      <Header>{category ? categoryName[category] : "찜한 가게"}</Header>
      {category ? (
        <CategoryStoreList category={category} />
      ) : (
        <LikesStoreList />
      )}
    </>
  );
}
