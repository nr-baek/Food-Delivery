import React from "react";
import foodImage from "../../assets/images/menuImages/유가네닭갈비-닭갈비세트.jpeg";

function MenuItem() {
  return (
    <label htmlFor="1">
      <div className="menu-item">
        <input type="checkbox" id="1" value="교촌시그니처순살세트" />
        <div>
          <p className="menu-name">교촌시그니처순살세트</p>
          <p className="menu-price">29,000원</p>
        </div>
        <img src={foodImage} alt="" />
      </div>
    </label>
  );
}

export default MenuItem;
