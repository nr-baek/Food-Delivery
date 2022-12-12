import React from "react";
import { StyledHeader } from "./styles";

function Header({ children }) {
  return (
    <StyledHeader>
      <h1>{children}</h1>
    </StyledHeader>
  );
}

export default Header;
