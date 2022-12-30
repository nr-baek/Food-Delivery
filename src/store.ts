import { IOrderStore, IUserStore } from "types/storeTypes";
import create from "zustand";
import { devtools } from "zustand/middleware";
import produce from "immer";
import { IOrderItem } from "types/responseTypes";

// 1. user정보 스토어
const useUserStore = create<IUserStore>()(
  devtools(set => ({
    id: "",
    nickname: "",
    actions: {
      setId: (id: string) => set(() => ({ id })),
      setNickname: (nickname: string) => set(() => ({ nickname })),
    },
  })),
);

export const useUserId = () => useUserStore(state => state.id);
export const useUserNickname = () => useUserStore(state => state.nickname);
export const useUserActions = () => useUserStore(state => state.actions);

// 2. 주문 정보 스토어

const useOrderStore = create<IOrderStore>()(
  devtools(set => ({
    storeId: "",
    orderList: [],
    totalAmount: 0,
    actions: {
      setStoreId: paramsStoreId =>
        set(state => {
          if (state.storeId && state.storeId !== paramsStoreId) {
            return { storeId: paramsStoreId, orderList: [], totalAmount: 0 };
          } else if (!state.storeId) {
            return { storeId: paramsStoreId };
          }
          return state;
        }),
      addMenu: (idx, menu) => {
        let newOrderList;
        return set(state => {
          newOrderList = produce(state.orderList, orderList => {
            orderList[idx] = menu;
          });
          return {
            orderList: newOrderList,
            totalAmount: newOrderList.reduce((curr, menu, i) => {
              if (menu) {
                return curr + menu.foodPrice * menu.orderCount;
              }
              return curr;
            }, 0),
          };
        });
      },
      deleteMenu: idx => {
        let newOrderList;
        return set(state => {
          newOrderList = produce(state.orderList, orderList => {
            orderList[idx] = null;
          });
          return {
            orderList: newOrderList,
            totalAmount: newOrderList.reduce((curr, menu, i) => {
              if (menu) {
                return curr + menu.foodPrice * menu.orderCount;
              }
              return curr;
            }, 0),
          };
        });
      },
      resetOrderList: () =>
        set(state => ({
          orderList: [],
          totalAmount: 0,
        })),
      increaseMenuCount: idx =>
        set(state => {
          const newOrderList = produce(state.orderList, orderList => {
            const orderItem = orderList[idx] as IOrderItem;
            orderItem.orderCount += 1;
          });
          return {
            orderList: newOrderList,
            totalAmount: newOrderList.reduce((curr, menu, i) => {
              if (menu) {
                return curr + menu.foodPrice * menu.orderCount;
              }
              return curr;
            }, 0),
          };
        }),
      decreaseMenuCount: idx =>
        set(state => {
          const newOrderList = produce(state.orderList, orderList => {
            const orderItem = orderList[idx] as IOrderItem;
            orderItem.orderCount -= 1;
          });
          return {
            orderList: newOrderList,
            totalAmount: newOrderList.reduce((curr, menu, i) => {
              if (menu) {
                return curr + menu.foodPrice * menu.orderCount;
              }
              return curr;
            }, 0),
          };
        }),
    },
  })),
);

export const useStoreId = () => useOrderStore(state => state.storeId);
export const useTotalAmount = () => useOrderStore(state => state.totalAmount);
export const useOrderList = () => useOrderStore(state => state.orderList);
export const useOrderListAction = () => useOrderStore(state => state.actions);
