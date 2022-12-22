import useLoginCheck from "hooks/useLoginCheck";
import useStoreDetailQuery from "hooks/useStoreDetailQuery";
import { useNavigate, useParams } from "react-router-dom";
import { StoreDetailInfo } from "types/responseTypes";
import ReviewItem from "./ReviewItem";
import { ReviewInfoBox } from "./styles";

function ReviewList() {
  const navigate = useNavigate();
  const { storeId } = useParams();

  const { data: storeInfo } = useStoreDetailQuery(storeId);
  const { reviews, storeStar } = storeInfo as StoreDetailInfo;

  const onClickButton = useLoginCheck(() => {
    navigate("/review");
  });

  return (
    <>
      <ReviewInfoBox>
        <span>
          <span>
            <i className="fas fa-star"></i> {storeStar}
          </span>
          <span>|</span>
          <span>리뷰 {reviews.length}개</span>
        </span>
        <button onClick={onClickButton}>리뷰쓰기</button>
      </ReviewInfoBox>
      {reviews.map(review => (
        <ReviewItem key={review.reviewId} reviewInfo={review} />
      ))}
    </>
  );
}

export default ReviewList;
