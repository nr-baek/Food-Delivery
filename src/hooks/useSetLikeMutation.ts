import { ref, set } from "@firebase/database";
import { db } from "../firebase";
import { useMutation, UseMutationResult, useQueryClient } from "react-query";

interface ILike {
  currentLikesState: boolean;
}

export interface ILikeSettingInfo {
  userId: string;
  currentLikesState: boolean;
  storeId: number;
}

const addLikes = async (userId: string, storeId: number) => {
  await set(ref(db, `users/${userId}/likes/${storeId}`), true);
};

const deleteLikes = async (userId: string, storeId: number) => {
  await set(ref(db, `users/${userId}/likes/${storeId}`), null);
};

export const setLikesApi = async (likeSettingInfo: ILikeSettingInfo) => {
  if (likeSettingInfo.currentLikesState) {
    await deleteLikes(likeSettingInfo.userId, likeSettingInfo.storeId);
    return { currentLikesState: false };
  } else {
    await addLikes(likeSettingInfo.userId, likeSettingInfo.storeId);
    return { currentLikesState: true };
  }
};

export default function useSetLikeMutation(): UseMutationResult<
  ILike,
  Error,
  ILikeSettingInfo,
  {
    previousLike: ILike | undefined;
  }
> {
  const queryClient = useQueryClient();
  return useMutation(setLikesApi, {
    onMutate: async (likeSettingInfo: ILikeSettingInfo) => {
      await queryClient.cancelQueries([
        "isLike",
        likeSettingInfo.userId,
        likeSettingInfo.storeId,
      ]);

      const previousLike = queryClient.getQueryData<ILike>([
        "isLike",
        likeSettingInfo.userId,
        likeSettingInfo.storeId,
      ]);

      queryClient.setQueryData<ILike>(
        ["isLike", likeSettingInfo.userId, likeSettingInfo.storeId],
        old => ({
          currentLikesState: !Boolean(likeSettingInfo.currentLikesState),
        }),
      );
      return { previousLike };
    },
    onError: (err, likeSettingInfo, context) => {
      queryClient.setQueryData(
        ["isLike", likeSettingInfo.userId, likeSettingInfo.storeId],
        context?.previousLike,
      );
    },
    onSettled: (data, error, likeSettingInfo) => {
      queryClient.invalidateQueries([
        "isLike",
        likeSettingInfo?.userId,
        likeSettingInfo.storeId,
      ]);
    },
  });
}
