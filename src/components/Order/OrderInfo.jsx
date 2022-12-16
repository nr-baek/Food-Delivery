import React from "react";
import OrderItem from "./OrderItem";
import StoreInfo from "./StoreInfo";
import { OrderInfoBox, OrderList } from "./styles";
import WarningMsg from "./WarningMsg";

function OrderInfo() {
  return (
    <>
      <OrderInfoBox>
        <StoreInfo />
        <OrderList>
          <OrderItem />
        </OrderList>
        <div class="order-price-wrap">
          <span>총 주문금액</span>
          <span class="order-price">50,000 원</span>
        </div>
        <WarningMsg />
        <div className="order-btn-wrap">
          <button class="order-btn">
            <span class="list-count-wrap">
              <span class="list-count">10</span>
            </span>
            <span id="totalPrice" class="order-price">
              60000원
            </span>{" "}
            배달 주문하기
          </button>
        </div>
      </OrderInfoBox>
    </>
  );
}

export default OrderInfo;
