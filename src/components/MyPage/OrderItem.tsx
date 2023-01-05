import React from "react";
import { ItemList } from "./styles";
import { Link } from "react-router-dom";

function OrderItem() {
  return (
    <ItemList>
      <Link to={`/store/detail/${1}`}>
        <span className="storeName">임영웅의 티바두마리치킨 성수화양점</span>
      </Link>
      <div className="orderInfo">
        <span className="orderDate">결제일시: 2023년 1월 5일 16:42:57</span>
        <span className="amount">결제금액: 123,400원</span>
      </div>
    </ItemList>
  );
}

export default OrderItem;
