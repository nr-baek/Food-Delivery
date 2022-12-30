import React from "react";
import { IOrderItem } from "types/responseTypes";

interface Props {
  key: number;
  orderInfo: IOrderItem;
}

function OrderedItem({ orderInfo }: Props) {
  return (
    <li className="order-list">
      <div className="menu-name">{orderInfo.foodName}</div>
      <div>{orderInfo.orderCount}개</div>
      <div>
        {(orderInfo.foodPrice * orderInfo.orderCount).toLocaleString()}원
      </div>
    </li>
  );
}

export default OrderedItem;
