import React from "react";
import BottomMenu from "../components/common/BottomMenu";
import MyPage from "../components/MyPage";
import { Container } from "../components/common/styles";

function MyPagePage() {
  return (
    <Container>
      <MyPage />
      <BottomMenu />
    </Container>
  );
}

export default MyPagePage;
