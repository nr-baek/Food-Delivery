export interface IUser {
  login: boolean;
  id: string;
  nickname: string;
  actions: {
    setId: (id: string) => void;
    setNickname: (nickname: string) => void;
    setLogin: (login: boolean) => void;
  };
}
