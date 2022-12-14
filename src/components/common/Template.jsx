import React from "react";
import BottomMenu from "./BottomMenu";
import { Container } from "./styles";

function Template({ children }) {
  return (
    <Container>
      {children}
      <BottomMenu />
    </Container>
  );
}

export default Template;
