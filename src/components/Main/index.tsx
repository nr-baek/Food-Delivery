import React, { useEffect } from "react";
// import { Header } from "./styles";
import Header from "../common/Header";
import Banner from "./Banner";
import Category from "./Category";
import Search from "./Search";
import { useLogin } from "store";
import { useNavigate } from "react-router-dom";

export default function Main() {
  const login = useLogin();
  const navigate = useNavigate();

  useEffect(() => {
    if (!login) {
      // navigate("/login");
    }
  }, [login]);
  return (
    <>
      <h1 className="a11y-hidden">메인페이지</h1>
      <Header>오늘 뭐먹지</Header>
      <Banner />
      <Category />
      <Search />
    </>
  );
}
