import { useQuery } from "react-query";
import { UseQueryResult } from "react-query/types/react/types";
import request from "utils/request";
import { StoreDetailInfo } from "types/responseTypes";

export const storeDetailApi = async (userId?: string, storeId?: string) => {
  const res = await request.get(`/storeInfo/${userId}/${storeId}`);
  return res.json();
};

const useStoreDetailQuery = (
  userId?: string,
  storeId?: string,
): UseQueryResult<StoreDetailInfo, Error> =>
  useQuery(["storeList", userId, storeId], () =>
    storeDetailApi(userId, storeId),
  );

export default useStoreDetailQuery;
