import React, { useEffect } from "react";
import Header from "../common/Header";
import OrderedItem from "./OrderedItem";
import { StyledBill } from "./styles";
import {
  useOrderList,
  useOrderListAction,
  useOrderDate,
  useStoreId,
  useStoreName,
  useTotalAmount,
} from "store";
import { useNavigate } from "react-router-dom";
import { IOrderItem } from "types/responseTypes";

function Index() {
  const navigate = useNavigate();
  const storeId = useStoreId();
  const storeName = useStoreName();
  const orderList = useOrderList();
  const totalAmount = useTotalAmount();
  const orderDate = useOrderDate();

  const { resetOrderList } = useOrderListAction();

  const orderArray = orderList.filter(list => list);
  let orderSum = `${orderArray[0]?.foodName} ${orderArray[0]?.orderCount}개`;

  if (orderArray.length > 1) {
    orderSum += " 외";
  }

  useEffect(() => {
    if (!storeId) {
      alert("잘못된 접근입니다.");
      navigate("/");
    }
  }, [storeId, resetOrderList, navigate]);

  return (
    <>
      <Header>주문 완료</Header>
      <StyledBill>
        <div className="order-info">
          <p className="order-completed-msg">주문이 완료되었어요!</p>
          <p className="store-name">{storeName}</p>
          <p className="order-sum">{orderSum}</p>
          <p className="order-date">주문일시: {orderDate}</p>
        </div>
        <h2 className="orders">주문 내역</h2>
        <ul>
          {orderArray.map((orderInfo, idx) => (
            <OrderedItem key={idx} orderInfo={orderInfo as IOrderItem} />
          ))}
        </ul>
        <div className="totalOrderedPrice">
          <span className="priceTitle">총 결제금액</span>
          <span>{totalAmount.toLocaleString()} 원</span>
        </div>
      </StyledBill>
    </>
  );
}

export default Index;
