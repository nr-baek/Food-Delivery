import useLoginCheck from "hooks/useLoginCheck";
import useSetLikeMutation from "hooks/useSetLikeMutation";
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
  const { isLoading, isError, data: like } = useStoreLikeQuery(userId, storeId);

  const { storeName, storeStar, reviewCount } = storeInfo as StoreDetailInfo;

  const likeSettingInfo = {
    userId: userId,
    storeId: storeId,
    like: !like?.isLike,
  };
  const { mutate } = useSetLikeMutation();

  const onClickLikeButton = useLoginCheck(() => {
    mutate(likeSettingInfo);
  });

  return (
    <StoreInfoBox>
      <span className="store-name">{storeName}</span>
      <p className="store-info">
        <i className="fas fa-star"></i>
        {storeStar} | 리뷰 {reviewCount} 개
      </p>
      <div className="store-connect">
        <button>
          <i className="fas fa-phone-alt"></i>전화
        </button>
        <button onClick={onClickLikeButton}>
          {!(isLoading || isError) && like?.isLike ? (
            <i className="fas fa-heart dib" />
          ) : (
            <i className="far fa-heart dib" />
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
