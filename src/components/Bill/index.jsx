import React from "react";
import Header from "../common/Header";
import OrderedItem from "./OrderedItem";
import { StyledBill } from "./styles";

function index() {
  return (
    <StyledBill>
      <Header prevBtn={true}>주문 완료</Header>
      <div class="order-info">
        <p class="order-completed-msg">주문이 완료되었어요!</p>
        <p class="store-name">임영웅의 티바두마리치킨 성수화양점</p>
        <p class="order-sum">알마간(알싸한마늘간장)+후라이드 외 4개</p>
        <p class="order-date">주문일시: 2022년 12월 17일 0:52</p>
      </div>
      <h2 class="orders">주문 내역</h2>
      <ul>
        <OrderedItem />
        <OrderedItem />
        <OrderedItem />
        <OrderedItem />
        <OrderedItem />
        <OrderedItem />
        <OrderedItem />
      </ul>
      <div class="totalOrderedPrice">
        <span className="priceTitle">총 결제금액</span>
        <span>124,000 원</span>
      </div>
    </StyledBill>
  );
}

export default index;
