import React from "react";
import useLoginCheck from "hooks/useLoginCheck";
import useSetLikeMutation, { ILikeSettingInfo } from "hooks/useSetLikeMutation";
import useStoreDetailQuery from "hooks/useStoreDetailQuery";
import useStoreLikeQuery from "hooks/useStoreLikeQuery";
import { useParams } from "react-router-dom";
import { useOrderListAction, useUserId } from "store";
import { StoreDetailInfo } from "types/responseTypes";
import { StoreInfoBox } from "./styles";

function StoreInfo() {
  const userId = useUserId();
  const { storeId } = useParams();
  const { data: storeInfo } = useStoreDetailQuery(storeId);
  const {
    isLoading,
    isError,
    data: likesData,
  } = useStoreLikeQuery(userId, storeId);

  const { storeName, storeStar, reviewCount, id } =
    storeInfo as StoreDetailInfo;

  const { setStoreName, setOrderDate } = useOrderListAction();

  const likeSettingInfo: ILikeSettingInfo = {
    userId: userId,
    currentLikesState: Boolean(likesData?.currentLikesState),
    storeId: id,
  };
  const { mutate } = useSetLikeMutation();

  const onClickLikeButton = useLoginCheck(userId, () => {
    mutate(likeSettingInfo);
  });

  setStoreName(storeName);
  setOrderDate("");

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
          {!(isLoading || isError) && likesData?.currentLikesState ? (
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

export default React.memo(StoreInfo);
