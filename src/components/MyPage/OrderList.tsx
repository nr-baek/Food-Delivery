import React from "react";
import OrderItem from "./OrderItem";
import { OrderSection } from "./styles";

function OrderList() {
  return (
    <OrderSection>
      <h2>주문 내역</h2>
      <ul>
        <OrderItem />
      </ul>
    </OrderSection>
  );
}

export default OrderList;
