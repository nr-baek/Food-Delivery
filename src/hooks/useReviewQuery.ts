import { useQuery, UseQueryResult } from "react-query";
import { IReview } from "types/responseTypes";
import { getDataFromDB } from "utils/getDataFromDB";

export const getReviewApi = async (storeId?: string) => {
  const data = await getDataFromDB(`reviews/${storeId}`);
  return data ? data : [];
};

const useReviewQuery = (
  storeId?: string,
): UseQueryResult<Array<IReview>, Error> =>
  useQuery(["reviews", storeId], () => getReviewApi(storeId), {
    staleTime: 5000,
  });

export default useReviewQuery;
