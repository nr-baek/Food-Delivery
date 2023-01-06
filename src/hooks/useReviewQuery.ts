import { useQuery, UseQueryResult } from "react-query";
import { IReviewResponse } from "types/responseTypes";
import request from "utils/request";

export const getReviewApi = async (storeId?: string) => {
  const res = await request.get(`/review/${storeId}`);
  return res.json();
};

const useReviewQuery = (
  storeId?: string,
): UseQueryResult<IReviewResponse, Error> =>
  useQuery(["reviews", storeId], () => getReviewApi(storeId), {
    staleTime: 5000,
  });

export default useReviewQuery;
