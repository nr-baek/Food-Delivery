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
  orderList: Array<IOrderItem | null>;
  totalAmount: number;
  actions: {
    addMenu: (idx: number, menu: IOrderItem) => void;
    deleteMenu: (idx: number) => void;
    resetOrderList: () => void;
    increaseMenuCount: (idx: number) => void;
    decreaseMenuCount: (idx: number) => void;
  };
}
