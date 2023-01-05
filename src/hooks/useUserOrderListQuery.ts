import { useQuery } from "react-query";
import { UseQueryResult } from "react-query/types/react/types";
import request from "utils/request";
import { IUserOrderListResponse } from "types/responseTypes";

export const userOrderListApi = async (userId?: string) => {
  const res = await request.get(`/orderList/${userId}`);
  return res.json();
};

const useUserOrderListQuery = (
  userId?: string,
): UseQueryResult<IUserOrderListResponse, Error> =>
  useQuery(["userOrderList", userId], () => userOrderListApi(userId));

export default useUserOrderListQuery;
