import React from "react";
import { Header } from "./styles";
import downIcon from "../../assets/images/downIcon.svg";
import Banner from "./Banner";
import Category from "./Category";
import Search from "./Search";

export default function Main() {
  return (
    <>
      <h1 className="a11y-hidden">메인페이지</h1>
      <Header>
        <p>주소를 입력해 주세요</p>
        <img src={downIcon} alt="아래방향 아이콘" />
      </Header>
      <Banner />
      <Category />
      <Search />
    </>
  );
}
