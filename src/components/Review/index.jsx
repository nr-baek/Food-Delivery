import React from "react";
import PrevButton from "../common/PrevButton";
import { ReviewWrapper } from "./styles";

function index() {
  return (
    <ReviewWrapper>
      <PrevButton />
      <p class="q-text">식사는 어떠셨나요?</p>
      <ul>
        <li id="1" class="full-star"></li>
        <li id="2" class="empty-star"></li>
        <li id="3" class="empty-star"></li>
        <li id="4" class="empty-star"></li>
        <li id="5" class="empty-star"></li>
      </ul>
      <h1>리뷰 작성</h1>
      <textarea
        placeholder="리뷰를 작성해주세요."
        rows="8"
        maxlength="100"
      ></textarea>
      <p class="fail-msg"></p>
      <p class="number-of-letters">
        <span class="input-letters">0</span> /{" "}
        <span class="max-letters">100자</span>
      </p>
      <div class="wrap-btn">
        <button>리뷰 등록</button>
      </div>
    </ReviewWrapper>
  );
}

export default index;
