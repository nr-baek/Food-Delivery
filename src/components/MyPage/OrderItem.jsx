import React from "react";
import { ItemList } from "./styles";

function OrderItem() {
  return (
    <ItemList>
      <span>소문난 감자탕</span>
      <span>감자탕 외 3개 18,000원</span>
      <a href="#">가게보기</a>
    </ItemList>
  );
}

export default OrderItem;
