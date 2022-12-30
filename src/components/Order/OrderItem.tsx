import React, { useCallback } from "react";
import { useOrderListAction } from "store";
import { IOrderItem } from "types/responseTypes";

interface Props {
  itemInfo: IOrderItem;
  idx: number;
}

const MAX_COUNT = 10;
const MIN_COUNT = 1;

function OrderItem({ itemInfo, idx }: Props) {
  const { increaseMenuCount, decreaseMenuCount, deleteMenu } =
    useOrderListAction();

  const clickIncrease = useCallback(() => {
    if (itemInfo.orderCount < MAX_COUNT) {
      increaseMenuCount(idx);
    }
  }, [increaseMenuCount, idx, itemInfo]);
  const clickDecrease = useCallback(() => {
    if (itemInfo.orderCount > MIN_COUNT) {
      decreaseMenuCount(idx);
    }
  }, [decreaseMenuCount, idx, itemInfo]);
  const clickDelete = useCallback(() => {
    deleteMenu(idx);
  }, [deleteMenu, idx]);

  return (
    <li className="order-list">
      <div className="delete-btn" onClick={clickDelete}></div>
      <div className="menu-info">
        <p className="menu-name">{itemInfo.foodName}</p>
        <div className="menu-price-wrap">
          <p className="menu-price">{itemInfo.foodPrice.toLocaleString()}</p>
          <span>원</span>
        </div>
      </div>
      <img
        className="menu-img"
        src={require(`../../assets/images/menuImages/${itemInfo.foodImage}`)}
        alt={itemInfo.foodImage}
      />
      <div className="counter">
        <span className="minus-btn" onClick={clickDecrease}>
          -
        </span>
        <span className="count">{itemInfo.orderCount}</span>
        <span className="plus-btn" onClick={clickIncrease}>
          +
        </span>
      </div>
    </li>
  );
}

export default React.memo(OrderItem);
