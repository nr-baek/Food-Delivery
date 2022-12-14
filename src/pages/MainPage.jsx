import React from "react";
import BottomMenu from "../components/common/BottomMenu";
import { Container } from "../components/common/styles";
import Main from "../components/Main";

export default function MainPage() {
  return (
    <Container>
      <Main />
      <BottomMenu />
    </Container>
  );
}
