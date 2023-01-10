import { get, orderByChild, query, ref } from "@firebase/database";
import { db } from "../firebase";
import { useQuery, UseQueryResult } from "react-query";
import { IReview } from "types/responseTypes";

export const getReviewApi = async (storeId?: string) => {
  let reviewList: Array<IReview> = [];
  await get(query(ref(db, `reviews/${storeId}`), orderByChild("date"))).then(
    snapshot => {
      if (snapshot.exists()) {
        snapshot.forEach(child => {
          reviewList.push({
            ...child.val(),
          });
          return false;
        });
      }
    },
  );

  return reviewList.reverse();
};

const useReviewQuery = (
  storeId?: string,
): UseQueryResult<Array<IReview>, Error> =>
  useQuery(["reviews", storeId], () => getReviewApi(storeId), {
    staleTime: 5000,
  });

export default useReviewQuery;
