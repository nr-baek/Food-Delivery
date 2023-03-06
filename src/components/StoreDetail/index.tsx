import Header from "../common/Header";
import StoreInfo from "./StoreInfo";
import StoreDetailMain from "./StoreDetailMain";
import StorePrice from "./StorePrice";
import { useParams } from "react-router-dom";
import useStoreDetailQuery from "hooks/useStoreDetailQuery";
import { MainBox, Message } from "components/common/styles";
import { useOrderListAction } from "store";
import { useCallback, useState } from "react";
import useThrottle from "hooks/useThrottle";

function Index() {
  const { storeId } = useParams();

  const {
    isLoading,
    data: storeInfo,
    isError,
    error,
  } = useStoreDetailQuery(storeId);

  const { setStoreId } = useOrderListAction();

  const [scrollUp, setScrollUp] = useState(true);

  if (storeId) {
    setStoreId(storeId);
  }

  const onScroll = useCallback(
    useThrottle((e: React.UIEvent<HTMLElement>) => {
      const target = e.target as HTMLDivElement;

      if (target.scrollTop > 100) {
        setScrollUp(false);
      } else if (target.scrollTop <= 100) {
        setScrollUp(true);
      }
    }, 300),
    [],
  );

  return (
    <>
      <Header prevBtn={true} scrollUp={scrollUp}>
        {isError ? "???" : storeInfo?.storeName ? storeInfo?.storeName : "-"}
      </Header>
      {isLoading || isError ? (
        <Message error={isError}>
          {isLoading && "Loading..."}
          {isError && "Error가 발생했습니다."}
          <br />
          {error && error.message}
        </Message>
      ) : (
        storeInfo && (
          <MainBox onScroll={onScroll}>
            <StoreInfo />
            <StorePrice />
            <StoreDetailMain />
          </MainBox>
        )
      )}
    </>
  );
}

export default Index;
