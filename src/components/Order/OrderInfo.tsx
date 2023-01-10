import React, { useCallback, useEffect } from "react";
import OrderItem from "./OrderItem";
import StoreInfo from "./StoreInfo";
import { MessageComp, OrderInfoBox, OrderList } from "./styles";
import WarningMsg from "./WarningMsg";
import Empty from "./Empty";
import {
  useOrderDate,
  useOrderList,
  useOrderListAction,
  useTotalAmount,
} from "store";
import OrderButton from "./OrderButton";
import useOrderMutation, { IOrderInfo } from "hooks/useOrderMutation";
import { useNavigate } from "react-router-dom";
import getCurrentDate from "utils/getCurrentDate";

function OrderInfo() {
  const orderList = useOrderList();
  const totalAmount = useTotalAmount();
  const { mutateAsync, isLoading, isError, error } = useOrderMutation();
  const { setOrderDate } = useOrderListAction();
  const orderDate = useOrderDate();
  const navigate = useNavigate();

  const order = useCallback(
    async (orderInfo: IOrderInfo) => {
      const res = await mutateAsync(orderInfo);
      if (res?.orderDate) {
        const date = getCurrentDate(res.orderDate);
        setOrderDate(date);
      }
    },
    [mutateAsync, setOrderDate],
  );

  useEffect(() => {
    if (orderDate) {
      alert("이미 주문 완료되었습니다. 메인 페이지로 이동합니다.");
      navigate("/");
    }
  }, []);

  return orderList.some(list => list) ? (
    <OrderInfoBox className={isLoading ? "loading" : ""}>
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
      <OrderButton isLoading={isLoading} order={order} />
      {isLoading && (
        <MessageComp>
          <span>주문 중</span>
          <p>잠시만 기다려주세요</p>
        </MessageComp>
      )}
      {isError && (
        <MessageComp>
          <p>문제가 발생했습니다.</p>
          <p>{(error as Error) && error.message}</p>
        </MessageComp>
      )}
    </OrderInfoBox>
  ) : (
    <Empty />
  );
}

export default OrderInfo;
