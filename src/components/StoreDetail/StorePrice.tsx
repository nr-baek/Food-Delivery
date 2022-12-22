import useStoreDetailQuery from "hooks/useStoreDetailQuery";
import { useParams } from "react-router-dom";
import { StoreDetailInfo } from "types/responseTypes";
import { StorePriceBox } from "./styles";

function StorePrice() {
  const { storeId } = useParams();

  const { data: storeInfo } = useStoreDetailQuery(storeId);
  const { minPrice, deliveryTime, deliveryTip } = storeInfo as StoreDetailInfo;
  return (
    <StorePriceBox>
      <p>
        <span>최소주문금액</span>
        {minPrice.toLocaleString()}원
      </p>
      <p>
        <span>배달시간</span>
        {deliveryTime}분
      </p>
      <p>
        <span>배달팁</span>
        {deliveryTip.toLocaleString()}원
      </p>
    </StorePriceBox>
  );
}

export default StorePrice;
