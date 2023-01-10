import { child, push, ref, set } from "@firebase/database";
import { db } from "../firebase";
import { UseMutationResult, useMutation } from "react-query";
import {
  IUserOrderListItemReq,
  IUserOrderListItemRes,
} from "types/responseTypes";
import { getDataFromDB } from "utils/getDataFromDB";

export interface IOrderInfo {
  userId?: string;
  orderDetail: IUserOrderListItemReq;
}

const addOrderedInfoApi = async (
  orderInfo: IOrderInfo,
): Promise<IUserOrderListItemRes | undefined> => {
  const key = push(child(ref(db), `users/${orderInfo.userId}/orderList`)).key;
  await set(
    ref(db, `users/${orderInfo.userId}/orderList/` + key),
    orderInfo.orderDetail,
  );

  const orderedInfo = await getDataFromDB(
    `users/${orderInfo.userId}/orderList/${key}`,
  );

  if (orderedInfo) {
    return orderedInfo;
  }
};

export default function useOrderMutation(): UseMutationResult<
  IUserOrderListItemRes | undefined,
  Error,
  IOrderInfo
> {
  return useMutation(addOrderedInfoApi, {
    onError(err) {
      console.log(err);
    },
  });
}
