import React from "react";
import { useOrderListAction } from "store";
import { DelButton } from "../Order/styles";
import PrevButton from "./PrevButton";
import { StyledHeader } from "./styles";

interface Props {
  children: string;
  prevBtn?: boolean;
  delBtn?: boolean;
  scrollUp?: boolean;
}

function Header({ children, prevBtn, delBtn, scrollUp }: Props) {
  const { resetOrderList } = useOrderListAction();

  const onClick = () => {
    resetOrderList();
  };

  return (
    <StyledHeader delBtn={delBtn}>
      <h1 className={scrollUp ? "hide" : ""}>{children}</h1>
      {prevBtn && <PrevButton />}
      {delBtn && <DelButton onClick={onClick}>전체삭제</DelButton>}
    </StyledHeader>
  );
}

export default React.memo(Header);
