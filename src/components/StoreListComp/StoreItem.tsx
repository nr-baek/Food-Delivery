import React from "react";
import { Link } from "react-router-dom";
import { StoreInfo } from "types/responseTypes";

interface Props {
  store: StoreInfo;
}

function StoreItem({ store }: Props) {
  const {
    id,
    storeImg,
    storeName,
    minPrice,
    deliveryTime,
    deliveryTip,
    storeStar,
    reviewCount,
  } = store;
  return (
    <li>
      <Link to={`/store/detail/${id}`}>
        <img
          src={require(`../../assets/images/stores/${storeImg}`)}
          alt={storeName}
        />
        <div className="store-description">
          <p className="store-name">{storeName}</p>
          <p>
            <i className="fas fa-star"></i>
            {storeStar} ({reviewCount})
          </p>
          <p>
            <i className="far fa-clock"></i>
            {deliveryTime}분 / 최소주문 {minPrice}원
          </p>
          <p>배달팁 {deliveryTip}원</p>
        </div>
      </Link>
    </li>
  );
}

export default StoreItem;
