import React from "react";
import { Message, StyledContainer } from "./styles";
import useStoreListOfCategoryQuery from "hooks/useStoreListOfCategoryQuery";
import StoreItem from "./StoreItem";

interface Props {
  category: string | undefined;
}

function StoreList({ category }: Props) {
  const { isLoading, data: storeLists } = useStoreListOfCategoryQuery(category);

  if (isLoading) {
    return <div>"Loading..."</div>;
  }
  return (
    <StyledContainer>
      {storeLists?.length ? (
        storeLists?.map(store => <StoreItem key={store.id} store={store} />)
      ) : (
        <Message>카테고리에 해당하는 식당이 없습니다.</Message>
      )}
    </StyledContainer>
  );
}

export default StoreList;
