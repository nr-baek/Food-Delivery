import { useQuery } from "react-query";
import { UseQueryResult } from "react-query/types/react/types";
import request from "utils/request";
import { StoreInfo } from "types/responseTypes";

// api
export const storeListOfCategoryApi = async (category?: string) => {
  const res = await request.get(`/category/${category}`);
  return res.json();
};

export const storeListOfLikeApi = async (userId?: string) => {
  const res = await request.get(`/likeStoreList/${userId}`);
  return res.json();
};

// Query
export const useStoreListOfCategoryQuery = (
  category?: string,
): UseQueryResult<Array<StoreInfo>, Error> =>
  useQuery(["storeList", category], () => storeListOfCategoryApi(category));

export const useStoreListOfLikeQuery = (
  userId?: string,
): UseQueryResult<Array<StoreInfo>, Error> =>
  useQuery(["storeList", userId], () => storeListOfLikeApi(userId));
