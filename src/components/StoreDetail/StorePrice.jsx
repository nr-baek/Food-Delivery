import React from "react";
import { StorePriceBox } from "./styles";

function StorePrice() {
  return (
    <StorePriceBox>
      <p>
        <span>최소주문금액</span>15,000원
      </p>
      <p>
        <span>배달시간</span>49분
      </p>
      <p>
        <span>배달팁</span>2000원
      </p>
    </StorePriceBox>
  );
}

export default StorePrice;
