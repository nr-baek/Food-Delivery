export interface StoreInfo {
  id: number;
  category: string;
  storeName: string;
  storeImg: string;
  minPrice: number;
  deliveryTime: number;
  deliveryTip: number;
  storeStar: number;
  reviewCount: number;
}

export interface IReview {
  id: number;
  star: number;
  content: string;
  date: string;
  nickname: string;
}

export interface IMenuItem {
  foodName: string;
  foodPrice: number;
  foodImage: string;
}

export interface StoreDetailInfo extends StoreInfo {
  tel: string;
  menu: Array<IMenuItem>;
}
