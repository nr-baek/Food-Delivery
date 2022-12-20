import React from "react";
import { DelButton } from "../Order/styles";
import PrevButton from "./PrevButton";
import { StyledHeader } from "./styles";

interface Props {
  children: React.ReactNode;
  prevBtn: boolean;
  delBtn: boolean;
}

function Header({ children, prevBtn, delBtn }: Props) {
  return (
    <StyledHeader delBtn={delBtn}>
      <h1>{children}</h1>
      {prevBtn && <PrevButton />}
      {delBtn && <DelButton>전체삭제</DelButton>}
    </StyledHeader>
  );
}

export default Header;
