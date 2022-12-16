import React from "react";
import { ReviewItemBox } from "./styles";

function ReviewItem() {
  return (
    <ReviewItemBox>
      <p class="review-nick">돼지의 민족</p>
      <p class="review-date">
        <span>
          <i class="fas fa-star"></i> 4
        </span>
        2020.11.12
      </p>
      <p class="review-txt">
        맛있으면 짖는 개. 월월월 월월 월월월우러 월 월월월 월월 월월월우러
        월월월월 월월 월월월우러 월월월월 월월 월월월우러 월월월월 월월
        월월월우러 월월월월 월월 월월월우러 월월월월 월월 월월월우러 월월월월
        월월 월월월우러 월월월월 월월 월월월우러 월월월월 월월 월월월우러
        월월월월 월월 월월월우러 월
      </p>
    </ReviewItemBox>
  );
}

export default ReviewItem;
