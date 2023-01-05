import { IOrderInfo } from "hooks/useOrderMutation";
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  useOrderList,
  useStoreId,
  useStoreName,
  useTotalAmount,
  useUserId,
} from "store";

interface Props {
  isLoading: boolean;
  order: (orderInfo: IOrderInfo) => Promise<void>;
}

function OrderButton({ isLoading, order }: Props) {
  const orderList = useOrderList();
  const totalAmount = useTotalAmount();
  const navigate = useNavigate();
  const userId = useUserId();
  const storeId = useStoreId();
  const storeName = useStoreName();

  const onClick = () => {
    const orderInfo: IOrderInfo = {
      userId,
      storeId,
      storeName,
      orderList,
      totalAmount,
    };

    order(orderInfo).then(() => {
      navigate("/bill");
    });
  };

  return (
    <div className="order-btn-wrap" onClick={onClick}>
      <button className="order-btn" disabled={isLoading}>
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

export default React.memo(OrderButton);
