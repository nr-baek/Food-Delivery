import useLoginCheck from "hooks/useLoginCheck";
import useStoreDetailQuery from "hooks/useStoreDetailQuery";
import useStoreLikeQuery from "hooks/useStoreLikeQuery";
import { useParams } from "react-router-dom";
import { useUserId } from "store";
import { StoreDetailInfo } from "types/responseTypes";
import { StoreInfoBox } from "./styles";

function StoreInfo() {
  const userId = useUserId();
  const { storeId } = useParams();
  const { data: storeInfo } = useStoreDetailQuery(storeId);
  const { isLoading, isError, data } = useStoreLikeQuery(userId, storeId);

  const { storeName, storeStar, reviewCount } = storeInfo as StoreDetailInfo;

  const onClickLikes = useLoginCheck(() => {
    // user정보의 favorites에 가게ID 추가하는 mutation 처리
    // 낙관적 업데이트
  });

  return (
    <StoreInfoBox>
      <span className="store-name">{storeName}</span>
      <p className="store-info">
        <i className="fas fa-star"></i>
        {storeStar} | 리뷰 {reviewCount ? reviewCount : 0} 개
      </p>
      <div className="store-connect">
        <button>
          <i className="fas fa-phone-alt"></i>전화
        </button>
        <button onClick={onClickLikes}>
          {isLoading || isError || !data?.isLikes ? (
            <i className="far fa-heart dib" />
          ) : (
            <i className="fas fa-heart dib" />
          )}
          찜
        </button>
        <button>
          <i className="fas fa-share-square"></i>공유
        </button>
      </div>
    </StoreInfoBox>
  );
}

export default StoreInfo;
