import React from "react";
import { Link } from "react-router-dom";
import ReviewItem from "./ReviewItem";
import { ReviewInfoBox } from "./styles";

function ReviewList() {
  return (
    <>
      <ReviewInfoBox>
        <span>
          <span>
            <i class="fas fa-star"></i> 4.9
          </span>
          <span>|</span>
          <span>리뷰 4개</span>
        </span>
        <Link to="/">리뷰쓰기</Link>
      </ReviewInfoBox>
      <ReviewItem />
      <ReviewItem />
      <ReviewItem />
      <ReviewItem />
      <ReviewItem />
      <ReviewItem />
    </>
  );
}

export default ReviewList;
