import React from "react";
import { useOrderList, useTotalAmount } from "store";

function OrderButton() {
  const orderList = useOrderList();
  const totalAmount = useTotalAmount();

  return (
    <div className="order-btn-wrap">
      <button className="order-btn">
        <span className="list-count-wrap">
          <span className="list-count">
            {orderList.reduce((curr, menu, i) => {
              if (menu) {
                return curr + menu.orderCount;
              }
              return curr;
            }, 0)}
          </span>
        </span>
        <span className="order-price">{totalAmount.toLocaleString()}원</span>{" "}
        배달 주문하기
      </button>
    </div>
  );
}

export default OrderButton;
