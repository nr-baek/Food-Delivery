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

export interface StoreDetailInfo extends StoreInfo {
  tel: string;
  menu: Array<IMenuItem>;
}

export interface IReview {
  userId: number;
  star: number;
  content: string;
  date: string;
  nickname: string;
}

export interface IReviewResponse {
  reviewList: Array<IReview>;
  average: string;
}

export interface IMenuItem {
  foodName: string;
  foodPrice: number;
  foodImage: string;
}

export interface IOrderItem extends IMenuItem {
  orderCount: number;
}

export interface IOrderResponse {
  order: Boolean;
  orderDate: string;
}

export interface IUserOrderListItem {
  storeName: string;
  totalAmount: number;
  orderDate: string;
  storeId: string;
}

export interface IUserOrderListResponse {
  getData: boolean;
  userOrderList: Array<IUserOrderListItem>;
}
