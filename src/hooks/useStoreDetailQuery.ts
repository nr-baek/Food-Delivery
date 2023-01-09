import { useQuery } from "react-query";
import { UseQueryResult } from "react-query/types/react/types";
import { StoreDetailInfo } from "types/responseTypes";
import { getDataFromDB } from "utils/getDataFromDB";

export const getStoreDetailApi = async (storeId?: string) => {
  const data = await getDataFromDB(`detailStores/${storeId}`);
  return data;
};

const useStoreDetailQuery = (
  storeId?: string,
): UseQueryResult<StoreDetailInfo, Error> =>
  useQuery(["storeList", storeId], () => getStoreDetailApi(storeId), {
    staleTime: 3000,
  });

export default useStoreDetailQuery;
