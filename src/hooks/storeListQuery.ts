import { useQuery } from "react-query";
import { UseQueryResult } from "react-query/types/react/types";
import request from "utils/request";
import { StoreInfo } from "types/responseTypes";

// api
export const storeListOfCategoryApi = async (category?: string) => {
  const res = await request.get(`/category/${category}`);
  return res.json();
};

export const storeListOfLikesApi = async (id?: string) => {
  const res = await request.get(`/dib/${id}`);
  return res.json();
};

// Query
export const useStoreListOfCategoryQuery = (
  category?: string,
): UseQueryResult<Array<StoreInfo>, Error> =>
  useQuery(["storeList", category], () => storeListOfCategoryApi(category));

export const useStoreListOfLikesQuery = (
  userId?: string,
): UseQueryResult<Array<StoreInfo>, Error> =>
  useQuery(["storeList", userId], () => storeListOfLikesApi(userId));
