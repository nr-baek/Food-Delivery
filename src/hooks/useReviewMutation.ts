import { child, push, ref, set, update } from "@firebase/database";
import { db } from "../firebase";
import { UseMutationResult, useMutation } from "react-query";
import request from "utils/request";
import { getReviewApi } from "./useReviewQuery";
import getCategory from "utils/getCategory";

export interface IReviewInfo {
  storeId: string;
  review: {
    nickname: string;
    star: number;
    content: string;
    date: object;
  };
}

export interface IReviewPostResponse {
  write: boolean;
}

interface IUpdateFirebaseObj {
  [key: string]: number | string;
}

export const addReviewApi = async (reviewInfo: IReviewInfo) => {
  const { storeId, review } = reviewInfo;
  const key = push(child(ref(db), `reviews/${storeId}`)).key;
  await set(ref(db, `reviews/${storeId}/` + key), review);

  const newReviewList = await getReviewApi(storeId);

  const reviewCount = newReviewList.length;
  const averageStar = (
    newReviewList.reduce((curr, reviewItem) => curr + reviewItem.star, 0) /
    reviewCount
  ).toFixed(1);

  const dbUpdateInfo: IUpdateFirebaseObj = {};

  dbUpdateInfo[`category/${getCategory(storeId)}/${storeId}/reviewCount`] =
    reviewCount;
  dbUpdateInfo[`category/${getCategory(storeId)}/${storeId}/storeStar`] =
    averageStar;

  dbUpdateInfo[`detailStores/${storeId}/reviewCount`] = reviewCount;
  dbUpdateInfo[`detailStores/${storeId}/storeStar`] = averageStar;

  dbUpdateInfo[`stores/${storeId}/reviewCount`] = reviewCount;
  dbUpdateInfo[`stores/${storeId}/storeStar`] = averageStar;

  await update(ref(db), dbUpdateInfo);
};

export const postReviewApi = async (
  reviewInfo: IReviewInfo,
): Promise<IReviewPostResponse> => {
  const res = await request.post(`/review/${reviewInfo.storeId}`, reviewInfo);
  return res.json();
};

export default function useReviewMutation(): UseMutationResult<
  void,
  Error,
  IReviewInfo
> {
  return useMutation(addReviewApi, {
    onError(err) {
      console.log(err);
    },
  });
}
