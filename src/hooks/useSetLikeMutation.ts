import { useMutation, UseMutationResult, useQueryClient } from "react-query";
import request from "utils/request";

interface ILikeSettingInfo {
  userId?: string;
  storeId?: string;
  like?: boolean;
}

interface ILike {
  isLike: boolean;
}

export const setLikeApi = async (likeSettingInfo: ILikeSettingInfo) => {
  const res = await request.post(
    `/likes/${likeSettingInfo.userId}/${likeSettingInfo.storeId}`,
    {
      like: likeSettingInfo.like,
    },
  );
  return res.json();
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
  return useMutation(setLikeApi, {
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

      if (previousLike) {
        queryClient.setQueryData<ILike>(
          ["isLike", likeSettingInfo.userId, likeSettingInfo.storeId],
          old => ({
            isLike: Boolean(likeSettingInfo.like),
          }),
        );
      }
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
