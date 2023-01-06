import { useQuery } from "react-query";
import { UseQueryResult } from "react-query/types/react/types";
import request from "utils/request";
import { StoreDetailInfo } from "types/responseTypes";

export const storeDetailApi = async (storeId?: string) => {
  const res = await request.get(`/storeInfo/${storeId}`);
  return res.json();
};

const useStoreDetailQuery = (
  storeId?: string,
): UseQueryResult<StoreDetailInfo, Error> =>
  useQuery(["storeList", storeId], () => storeDetailApi(storeId), {
    staleTime: 3000,
  });

export default useStoreDetailQuery;
