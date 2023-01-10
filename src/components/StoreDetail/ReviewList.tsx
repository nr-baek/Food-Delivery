import useLoginCheck from "hooks/useLoginCheck";
import useReviewQuery from "hooks/useReviewQuery";
import { useNavigate, useParams } from "react-router-dom";
import ReviewItem from "./ReviewItem";
import { Loading, ReviewInfoBox } from "./styles";
import { useUserId } from "store";
import checkReviewable from "utils/checkReviewable";

function ReviewList() {
  const navigate = useNavigate();
  const userId = useUserId();
  const { storeId } = useParams();

  const { data, isLoading } = useReviewQuery(storeId);

  const onClickButton = useLoginCheck(userId, async () => {
    try {
      const isOrdered = await checkReviewable(userId, storeId as string);

      if (isOrdered) {
        navigate(`/review/${storeId}`);
      } else {
        alert("해당 가게의 주문 기록이 없습니다.");
      }
    } catch (e) {
      console.log("error!", e.message);
      alert(`리뷰 작성 가능 여부를 확인 중 문제가 발생했습니다. ${e.message}`);
    }
  });

  return (
    <>
      <ReviewInfoBox>
        <span>
          <span>
            <i className="fas fa-star"></i>{" "}
            {isLoading || !data
              ? "-"
              : data.length
              ? (
                  data?.reduce((curr, reviewInfo) => {
                    return curr + reviewInfo.star;
                  }, 0) / data.length
                ).toFixed(1)
              : 0}
          </span>
          <span>|</span>
          <span>리뷰 {isLoading ? "-" : data?.length}개</span>
        </span>
        <button onClick={onClickButton}>리뷰쓰기</button>
      </ReviewInfoBox>
      {isLoading && <Loading>loading...</Loading>}
      {data?.map(review => (
        <ReviewItem key={review.userId} reviewInfo={review} />
      ))}
    </>
  );
}

export default ReviewList;
