import React from "react";

function StoreItem() {
  return (
    // <li class="store-item">
    //   <a href="/storeInfo?id=${store.id}">
    //     <img src="img/${store.storeImg}" alt="${store.storeName}" class="store-img" />
    //     <div class="store-description">
    //       <p class="store-name">${store.storeName}</p>
    //       <p><i class="fas fa-star"></i>${store.storeStar} (${store.reviews.length})</p>
    //       <p><i class="far fa-clock"></i>${store.deliveryTime} / 최소주문 ${store.minPrice}원</p>
    //       <p>배달팁 ${store.deliveryTip}</p>
    //     </div>
    //   </a>
    // </li>
    <li>
      <a href="#">
        <img src={require("../../assets/images/stores/BBQ.jpg")} alt="BBQ" />
        {/* <img src={require(`../../assets/images/stores/${imageName}.png`).default} alt={${imageName}} /> */}
        <div className="store-description">
          <p className="store-name">BBQ</p>
          <p>
            <i className="fas fa-star"></i>3.7 (4)
          </p>
          <p>
            <i className="far fa-clock"></i>37분 / 최소주문 12,000원
          </p>
          <p>배달팁 3,000원</p>
        </div>
      </a>
    </li>
  );
}

export default StoreItem;
