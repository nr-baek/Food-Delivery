import React from "react";
import MenuItem from "./MenuItem";
import { MenuBox, OrderButton } from "./styles";

function Menu() {
  return (
    <>
      <MenuBox>
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </MenuBox>
      <OrderButton>
        <span>주문</span>하기
      </OrderButton>
    </>
  );
}

export default Menu;
