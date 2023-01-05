import { UseMutationResult, useMutation } from "react-query";
import { IOrderItem, IOrderResponse } from "types/responseTypes";
import request from "utils/request";

export interface IOrderInfo {
  userId?: string;
  storeName?: string;
  storeId?: string;
  orderList?: (IOrderItem | null)[];
  totalAmount: number;
}

export const setOrderApi = async (
  orderInfo: IOrderInfo,
): Promise<IOrderResponse> => {
  const res = await request.post(`/order`, {
    orderInfo,
  });
  return res.json();
};

export default function useOrderMutation(): UseMutationResult<
  IOrderResponse,
  Error,
  IOrderInfo
> {
  return useMutation(setOrderApi, {
    onError(err) {
      console.log(err);
    },
  });
}
