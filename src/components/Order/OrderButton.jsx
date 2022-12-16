import React from "react";

function OrderButton({ orderCount, totalPrice }) {
  return (
    <div class="order-btn-wrap">
      <button class="order-btn">
        <span class="list-count-wrap">
          <span class="list-count">10</span>
        </span>
        <span id="totalPrice" class="order-price">
          60,000원
        </span>{" "}
        배달 주문하기
      </button>
    </div>
  );
}

export default OrderButton;
