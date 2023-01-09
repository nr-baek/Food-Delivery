import { useQuery } from "react-query";
import { UseQueryResult } from "react-query/types/react/types";
import { StoreInfo } from "types/responseTypes";
import { getDataFromDB } from "utils/getDataFromDB";

export const getStoreListOfCategoryApi = async (category?: string) => {
  const data = await getDataFromDB(`category/${category}`);
  return data ? data : [];
};

export const getStoreListOfLikeApi = async (userId?: string) => {
  const data = await getDataFromDB(`users/${userId}/likes`);
  return data ? data : [];
};

// Query
export const useStoreListOfCategoryQuery = (
  category?: string,
): UseQueryResult<Array<StoreInfo>, Error> =>
  useQuery(["storeList", category], () => getStoreListOfCategoryApi(category));

export const useStoreListOfLikeQuery = (
  userId?: string,
): UseQueryResult<Array<StoreInfo>, Error> =>
  useQuery(["storeList", userId], () => getStoreListOfLikeApi(userId));
