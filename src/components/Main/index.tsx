import React from "react";
import Header from "../common/Header";
import Banner from "./Banner";
import Category from "./Category";

export default function Main() {
  return (
    <>
      <h1 className="a11y-hidden">메인페이지</h1>
      <Header>오늘 뭐먹지</Header>
      <Banner />
      <Category />
    </>
  );
}
