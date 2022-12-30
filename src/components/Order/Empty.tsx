import React from "react";
import { EmptyBack } from "./styles";

function Empty() {
  return (
    <EmptyBack>
      <div className="emptyImg"></div>
      <p>선택된 메뉴가 없습니다.</p>
    </EmptyBack>
  );
}

export default Empty;
