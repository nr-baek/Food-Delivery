import { get, orderByChild, query, ref } from "@firebase/database";
import { db } from "../firebase";
import { IUserOrderListItemRes } from "types/responseTypes";

const checkReviewable = async (userId: string, storeId: string) => {
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

    return orderList.some(item => item.storeId === storeId);
  } catch (error) {
    console.error(error);
  }
};

export default checkReviewable;
