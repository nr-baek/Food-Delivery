import React from "react";
import OrderItem from "./OrderItem";
import StoreInfo from "./StoreInfo";
import { OrderInfoBox, OrderList } from "./styles";
import WarningMsg from "./WarningMsg";
import Empty from "./Empty";
import { useOrderList, useTotalAmount } from "store";
import OrderButton from "./OrderButton";

function OrderInfo() {
  const orderList = useOrderList();
  const totalAmount = useTotalAmount();

  return orderList.some(list => list) ? (
    <OrderInfoBox>
      <StoreInfo />
      <OrderList>
        {orderList.map((orderItem, idx) => {
          if (orderItem) {
            return (
              <OrderItem
                key={orderItem.foodName}
                itemInfo={orderItem}
                idx={idx}
              />
            );
          }
          return null;
        })}
      </OrderList>
      <div className="order-price-wrap">
        <span>총 주문금액</span>
        <span className="order-price">{totalAmount.toLocaleString()} 원</span>
      </div>
      <WarningMsg />
      <OrderButton />
    </OrderInfoBox>
  ) : (
    <Empty />
  );
}

export default OrderInfo;
