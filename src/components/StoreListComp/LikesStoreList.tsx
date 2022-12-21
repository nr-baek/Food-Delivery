import React, { useEffect } from "react";
import { Message, StyledContainer } from "./styles";
import StoreItem from "./StoreItem";
import { useNavigate } from "react-router-dom";
import { useStoreListOfLikesQuery } from "hooks/storeListQuery";
import { useUserId } from "store";

function LikesStoreList() {
  const navigate = useNavigate();
  const id = useUserId();

  const {
    isLoading,
    data: storeLists,
    isError,
    error,
  } = useStoreListOfLikesQuery(id);

  useEffect(() => {
    const isLogin = localStorage.getItem("deliveryApp");
    if (!isLogin) {
      alert("로그인이 필요한 페이지입니다.");
      navigate("/login");
    }
  }, []);

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
        <Message>찜한 가게에 등록된 식당이 없습니다.</Message>
      )}
    </StyledContainer>
  );
}

export default LikesStoreList;
