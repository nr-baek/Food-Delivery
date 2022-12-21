import React from "react";
import { Message, StyledContainer } from "./styles";
import { useStoreListOfCategoryQuery } from "hooks/storeListQuery";
import StoreItem from "./StoreItem";

interface Props {
  category: string | undefined;
}

function CategoryStoreList({ category }: Props) {
  const {
    isLoading,
    data: storeLists,
    isError,
    error,
  } = useStoreListOfCategoryQuery(category);

  if (isLoading || isError) {
    return (
      <StyledContainer>
        <Message>
          {isLoading && "Loading..."}
          {isError && "Error가 발생했습니다."}
          <br />
          {error && error.message}
        </Message>
      </StyledContainer>
    );
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

export default CategoryStoreList;
