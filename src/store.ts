import { IUser } from "types/storeTypes";
import create from "zustand";
import { devtools } from "zustand/middleware";

const useUserStore = create<IUser>()(
  devtools(set => ({
    login: false,
    id: "",
    nickname: "",
    actions: {
      setId: (id: string) => set(() => ({ id })),
      setNickname: (nickname: string) => set(() => ({ nickname })),
      setLogin: (login: boolean) => set(() => ({ login })),
    },
  })),
);

export const useUserId = () => useUserStore(state => state.id);
export const useUserNickname = () => useUserStore(state => state.nickname);
export const useLogin = () => useUserStore(state => state.login);
export const useUserActions = () => useUserStore(state => state.actions);
