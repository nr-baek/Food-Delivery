import { useQuery } from "react-query";
import { UseQueryResult } from "react-query/types/react/types";
import request from "utils/request";
import { StoreInfo } from "types/responseTypes";

export const storeListOfCategoryApi = async (category?: string) => {
  const res = await request.get(`/category/${category}`);
  return res.json();
};

const useStoreListOfCategoryQuery = (
  category?: string,
): UseQueryResult<Array<StoreInfo>, Error> =>
  useQuery(["storeList", category], () => storeListOfCategoryApi(category));

export default useStoreListOfCategoryQuery;
