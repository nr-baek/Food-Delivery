export interface IUser {
  id: string;
  nickname: string;
  actions: {
    setId: (id: string) => void;
    setNickname: (nickname: string) => void;
  };
}
