import { useQuery } from "react-query";
import { UseQueryResult } from "react-query/types/react/types";
import request from "utils/request";

interface ILike {
  isLike: boolean;
}

export const getLikeStateApi = async (userId?: string, storeId?: string) => {
  const res = await request.get(`/likes/${userId}/${storeId}`);
  return res.json();
};

const useStoreLikeQuery = (
  userId?: string,
  storeId?: string,
): UseQueryResult<ILike, Error> =>
  useQuery(
    ["isLike", userId, storeId],
    () => getLikeStateApi(userId, storeId),
    {
      staleTime: 5000,
    },
  );

export default useStoreLikeQuery;
