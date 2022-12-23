import { useQuery, UseQueryResult } from "react-query";
import { IReview } from "types/responseTypes";
import request from "utils/request";

export const getReviewApi = async (storeId?: string) => {
  const res = await request.get(`/review/${storeId}`);
  return res.json();
};

const useReviewQuery = (
  storeId?: string,
): UseQueryResult<Array<IReview>, Error> =>
  useQuery(["reviews", storeId], () => getReviewApi(storeId), {
    staleTime: 5000,
  });

export default useReviewQuery;
