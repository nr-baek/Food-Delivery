import React from "react";
import { StyledContainer } from "./styles";
import useStoreListOfCategoryQuery from "hooks/useStoreListOfCategoryQuery";
import StoreItem from "./StoreItem";

function LikesStoreList() {
  // const { isLoading, data: storeLists } = useStoreListOfCategoryQuery(category);
  // if (isLoading) {
  //   return <div>"Loading..."</div>;
  // }

  return (
    <StyledContainer>
      {/* {storeLists?.map(store => (
        <StoreItem key={store.id} store={store} />
      ))} */}
    </StyledContainer>
  );
}

export default LikesStoreList;
