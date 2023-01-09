import { useQuery } from "react-query";
import { UseQueryResult } from "react-query/types/react/types";
import { getDataFromDB } from "utils/getDataFromDB";

interface ILike {
  isLike: boolean;
}

export const getLikeStateApi = async (userId?: string, storeId?: string) => {
  const data = await getDataFromDB(`/users/${userId}/likes/${storeId}`);
  return !!data;
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
