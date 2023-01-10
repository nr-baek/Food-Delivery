import React, { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PrevButton from "../common/PrevButton";
import { ReviewWrapper } from "./styles";
import checkReviewable from "utils/checkReviewable";
import { useOrderListAction, useUserId, useUserNickname } from "store";
import useReviewMutation from "hooks/useReviewMutation";

function Index() {
  const navigate = useNavigate();
  const { storeId } = useParams();
  const userId = useUserId();
  const nickname = useUserNickname();
  const { resetOrderList } = useOrderListAction();

  const [star, setStar] = useState("1");
  const [content, setContent] = useState("");

  const { mutateAsync, isLoading, isError } = useReviewMutation();

  const checkAccessibility = useCallback(async () => {
    try {
      const isOrdered = await checkReviewable(userId, storeId as string);
      if (!isOrdered) {
        alert("해당 가게의 주문 기록이 없습니다.");
        navigate("/");
      }
    } catch (e) {
      console.log("error!", e.message);
      alert(`리뷰 작성 가능 여부를 확인 중 문제가 발생했습니다. ${e.message}`);
    }
  }, [navigate, storeId, userId]);

  const onClickStar = useCallback((e: React.MouseEvent<HTMLUListElement>) => {
    if (e.target instanceof HTMLLIElement) {
      setStar(e.target.id);
    }
  }, []);

  const onChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  }, []);

  const onClick = useCallback(
    async (e: React.MouseEvent<HTMLButtonElement>) => {
      const reviewInfo = {
        storeId: storeId as string,
        userId,
        nickname,
        star,
        content,
      };

      const res = await mutateAsync(reviewInfo);
      if (res.write) {
        alert("리뷰 등록이 완료되었습니다.");
        resetOrderList();
        navigate(`/store/detail/${storeId}`);
      }
    },
    [
      userId,
      nickname,
      star,
      content,
      storeId,
      mutateAsync,
      navigate,
      resetOrderList,
    ],
  );

  useEffect(() => {
    if (!userId) {
      alert("로그인이 필요한 페이지입니다.");
      navigate("/login");
    } else {
      checkAccessibility();
    }
  }, []);

  return (
    <ReviewWrapper>
      <PrevButton />
      <p className="q-text">식사는 어떠셨나요?</p>
      <ul onClick={onClickStar}>
        <li id="1" className="full-star"></li>
        <li id="2" className={star >= "2" ? "full-star" : "empty-star"}></li>
        <li id="3" className={star >= "3" ? "full-star" : "empty-star"}></li>
        <li id="4" className={star >= "4" ? "full-star" : "empty-star"}></li>
        <li id="5" className={star === "5" ? "full-star" : "empty-star"}></li>
      </ul>
      <h1>리뷰 작성</h1>
      <textarea
        placeholder="100자 이내의 리뷰를 작성해주세요."
        maxLength={100}
        value={content}
        onChange={onChange}
      ></textarea>
      <p className="fail-msg">
        {isError && "error! 리뷰 등록 중 문제가 발생했습니다."}
      </p>
      <p className="number-of-letters">
        <span className="input-letters">
          {content.length <= 100 ? content.length : 100}
        </span>{" "}
        / <span className="max-letters">100자</span>
      </p>
      <div className="wrap-btn">
        <button onClick={onClick} disabled={isLoading}>
          리뷰 등록
        </button>
      </div>
    </ReviewWrapper>
  );
}

export default Index;
