import request from "./request";

const checkReviewable = async (userId: string, storeId: string) => {
  const res = await request.get(`/reviewable/${userId}/${storeId}`);
  return res.json();
};

export default checkReviewable;
