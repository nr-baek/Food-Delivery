import React from "react";
import testFoodImg from "../../assets/images/menuImages/소바식당-게딱지장덮밥.jpeg";

function OrderItem() {
  return (
    <li className="order-list">
      <div className="delete-btn"></div>
      <div className="menu-info">
        <p className="menu-name">게딱지장덮밥</p>
        <div className="menu-price-wrap">
          <p className="menu-price">18,000</p>
          <span>원</span>
        </div>
      </div>
      <img className="menu-img" src={testFoodImg} alt="게딱지장덮밥 사진" />
      <div className="counter">
        <span className="minus-btn">-</span>
        <span className="count">1</span>
        <span className="plus-btn">+</span>
      </div>
    </li>
  );
}

export default OrderItem;
