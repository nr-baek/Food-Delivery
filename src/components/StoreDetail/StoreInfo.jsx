import React from "react";
import { StoreInfoBox } from "./styles";

function StoreInfo() {
  return (
    <StoreInfoBox>
      <span className="store-name">푸라닭 자양점</span>
      <p className="store-info">
        <i className="fas fa-star"></i>4.9 | 리뷰 4
      </p>
      <div className="store-connect">
        <button>
          <i className="fas fa-phone-alt"></i>전화
        </button>
        <button>
          {/* <i className="far fa-heart dib"></i> */}
          <i className="fas fa-heart dib"></i> 찜
        </button>
        <button>
          <i className="fas fa-share-square"></i>공유
        </button>
      </div>
    </StoreInfoBox>
  );
}

export default StoreInfo;
