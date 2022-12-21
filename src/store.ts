import { IUser } from "types/storeTypes";
import create from "zustand";
import { devtools } from "zustand/middleware";

const useUserStore = create<IUser>()(
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
