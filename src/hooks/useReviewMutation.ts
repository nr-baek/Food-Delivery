import { UseMutationResult, useMutation } from "react-query";
import request from "utils/request";

export interface IReviewInfo {
  storeId: string;
  userId: string;
  nickname: string;
  star: string;
  content: string;
}

export interface IReviewPostResponse {
  write: boolean;
}

export const postReviewApi = async (
  reviewInfo: IReviewInfo,
): Promise<IReviewPostResponse> => {
  const res = await request.post(`/review/${reviewInfo.storeId}`, reviewInfo);
  return res.json();
};

export default function useReviewMutation(): UseMutationResult<
  IReviewPostResponse,
  Error,
  IReviewInfo
> {
  return useMutation(postReviewApi, {
    onError(err) {
      console.log(err);
    },
  });
}
