import React from "react";
import { ItemList } from "./styles";
import { Link } from "react-router-dom";
import { IUserOrderListItem } from "types/responseTypes";

interface Props {
  orderInfo: IUserOrderListItem;
}

function OrderItem({ orderInfo }: Props) {
  return (
    <ItemList>
      <div className="storeInfo">
        <span className="storeName">{orderInfo.storeName}</span>
        <Link to={`/store/detail/${orderInfo.storeId}`}>가게보기</Link>
      </div>
      <div className="orderInfo">
        <span className="orderDate">결제일시: {orderInfo.orderDate}</span>
        <span className="amount">
          결제금액: {orderInfo.totalAmount.toLocaleString()}원
        </span>
      </div>
    </ItemList>
  );
}

export default OrderItem;
