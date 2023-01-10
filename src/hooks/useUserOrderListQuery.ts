import { get, orderByChild, query, ref } from "@firebase/database";
import { db } from "../firebase";
import { useQuery } from "react-query";
import { UseQueryResult } from "react-query/types/react/types";
import { IUserOrderListItemRes } from "types/responseTypes";

export const userOrderListApi = async (userId: string) => {
  let orderList: Array<IUserOrderListItemRes> = [];
  try {
    await get(
      query(ref(db, `users/${userId}/orderList`), orderByChild("orderDate")),
    ).then(snapshot => {
      if (snapshot.exists()) {
        snapshot.forEach(child => {
          orderList.push({
            ...child.val(),
          });
          return false;
        });
      }
    });
    return orderList.reverse();
  } catch (error) {
    console.error(error);
  }
};

const useUserOrderListQuery = (
  userId: string,
): UseQueryResult<Array<IUserOrderListItemRes>, Error> =>
  useQuery(["userOrderList", userId], () => userOrderListApi(userId));

export default useUserOrderListQuery;
