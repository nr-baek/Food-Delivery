import useStoreDetailQuery from "hooks/useStoreDetailQuery";
import React from "react";
import { useStoreId } from "../../store";

function StoreInfo() {
  const storeId = useStoreId();
  const { data: storeInfo } = useStoreDetailQuery(storeId);
  return (
    <div className="store-info">
      <div className="store-name">{storeInfo?.storeName}</div>
      <div className="delivery-msg">
        <p>배달</p>
        <p>문 앞까지 음식이 배달됩니다.</p>
      </div>
    </div>
  );
}

export default React.memo(StoreInfo);
