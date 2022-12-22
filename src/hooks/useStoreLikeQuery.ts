import { useQuery } from "react-query";
import { UseQueryResult } from "react-query/types/react/types";
import request from "utils/request";

export const shopLikesApi = async (userId?: string, storeId?: string) => {
  const res = await request.get(`/likes/${userId}/${storeId}`);
  return res.json();
};

const useStoreLikeQuery = (
  userId?: string,
  storeId?: string,
): UseQueryResult<{ isLikes: boolean }, Error> =>
  useQuery(["isLikes", userId, storeId], () => shopLikesApi(userId, storeId), {
    staleTime: 5000,
  });

export default useStoreLikeQuery;
