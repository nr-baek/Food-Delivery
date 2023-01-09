import React from "react";
import { OrderSection } from "./styles";

function UnLoggedMember() {
  return (
    <OrderSection>
      <h2>주문 내역</h2>
      <ul>
        <div className="message">
          <p>로그인이 필요한 서비스입니다...</p>
        </div>
      </ul>
    </OrderSection>
  );
}

export default UnLoggedMember;
