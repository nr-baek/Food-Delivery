import React from "react";

function StoreItem() {
  return (
    <li>
      <a href="#">
        <img src="img/BBQ.jpg" alt="BBQ" class="store-img" />
        <div class="store-description">
          <p class="store-name">BBQ</p>
          <p>
            <i class="fas fa-star"></i>3.7 (4)
          </p>
          <p>
            <i class="far fa-clock"></i>37분 / 최소주문 12,000원
          </p>
          <p>배달팁 3,000원</p>
        </div>
      </a>
    </li>
  );
}

export default StoreItem;
