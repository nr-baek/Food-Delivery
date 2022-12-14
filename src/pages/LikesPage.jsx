import React from "react";
import BottomMenu from "../components/common/BottomMenu";
import Likes from "../components/Likes";
import { Container } from "../components/common/styles";

function LikesPage() {
  return (
    <Container>
      <Likes />
      <BottomMenu />
    </Container>
  );
}

export default LikesPage;
