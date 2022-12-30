import { IOrderItem } from "./responseTypes";

export interface IUserStore {
  id: string;
  nickname: string;
  actions: {
    setId: (id: string) => void;
    setNickname: (nickname: string) => void;
  };
}

export interface IOrderStore {
  storeName: string;
  storeId: string;
  orderList: Array<IOrderItem | null>;
  totalAmount: number;
  orderDate: string;
  actions: {
    setOrderDate: (time: string) => void;
    setStoreName: (storeName: string) => void;
    setStoreId: (paramsStoreId: string) => void;
    addMenu: (idx: number, menu: IOrderItem) => void;
    deleteMenu: (idx: number) => void;
    resetOrderList: () => void;
    increaseMenuCount: (idx: number) => void;
    decreaseMenuCount: (idx: number) => void;
  };
}
