import { useQuery } from "react-query";
import { UseQueryResult } from "react-query/types/react/types";
import { StoreInfo } from "types/responseTypes";
import { getDataFromDB } from "utils/getDataFromDB";

interface IlikesResponse {
  [key: string]: boolean;
}

export const getStoreListOfCategoryApi = async (category?: string) => {
  const data = await getDataFromDB(`category/${category}`);
  const storeList: Array<StoreInfo> = [];

  if (data) {
    for (const key in data as IlikesResponse) {
      storeList.push(data[key]);
    }
  }
  return storeList;
};

export const getStoreListOfLikeApi = async (userId?: string) => {
  const stores = await getDataFromDB(`stores`);
  const likes = await getDataFromDB(`users/${userId}/likes`);
  const myLikesStore: Array<StoreInfo> = [];
  let likesStoreIdArray = [];

  if (likes) {
    for (const key in likes as IlikesResponse) {
      likesStoreIdArray.push(+key);
    }

    if (stores) {
      likesStoreIdArray.forEach(storeId => {
        myLikesStore.push(stores[storeId]);
      });
    }
  }

  return myLikesStore;
};

// Query
export const useStoreListOfCategoryQuery = (
  category?: string,
): UseQueryResult<Array<StoreInfo>, Error> =>
  useQuery(["storeListOfCategory", category], () =>
    getStoreListOfCategoryApi(category),
  );

export const useStoreListOfLikeQuery = (
  userId?: string,
): UseQueryResult<Array<StoreInfo>, Error> =>
  useQuery(["storeListOfLikes", userId], () => getStoreListOfLikeApi(userId));
