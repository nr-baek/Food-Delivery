import React from "react";
import { useStoreName } from "store";

function StoreInfo() {
  const storeName = useStoreName();

  return (
    <div className="store-info">
      <div className="store-name">{storeName}</div>
      <div className="delivery-msg">
        <p>배달</p>
        <p>문 앞까지 음식이 배달됩니다.</p>
      </div>
    </div>
  );
}

export default React.memo(StoreInfo);
