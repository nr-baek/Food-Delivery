import React from "react";
import { DelButton } from "../Order/styles";
import PrevButton from "./PrevButton";
import { StyledHeader } from "./styles";

function Header({ children, prevBtn, delBtn }) {
  return (
    <StyledHeader delBtn={delBtn}>
      <h1>{children}</h1>
      {prevBtn && <PrevButton />}
      {delBtn && <DelButton>전체삭제</DelButton>}
    </StyledHeader>
  );
}

export default Header;
