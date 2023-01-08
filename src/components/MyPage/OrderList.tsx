import React from "react";
import OrderItem from "./OrderItem";
import { OrderSection } from "./styles";
import { useUserId } from "store";
import useUserOrderListQuery from "hooks/useUserOrderListQuery";

function OrderList() {
  const userId = useUserId();
  const { isLoading, isError, data, error } = useUserOrderListQuery(userId);

  return (
    <OrderSection>
      <h2>주문 내역</h2>
      <ul>
        {isLoading && (
          <div className="message">
            <p>loading...</p>
          </div>
        )}
        {isError && (
          <div className="message">
            <p>error!</p>
            <p>{error.message}</p>
          </div>
        )}
        {data?.userOrderList.length === 0 && (
          <div className="message">
            <p>주문한 내역이 없습니다.</p>
          </div>
        )}
        {data?.userOrderList.map(orderInfo => (
          <OrderItem key={orderInfo.orderDate} orderInfo={orderInfo} />
        ))}
      </ul>
    </OrderSection>
  );
}

export default OrderList;
