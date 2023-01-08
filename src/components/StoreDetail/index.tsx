import Header from "../common/Header";
import StoreInfo from "./StoreInfo";
import StoreDetailMain from "./StoreDetailMain";
import StorePrice from "./StorePrice";
import { useParams } from "react-router-dom";
import useStoreDetailQuery from "hooks/useStoreDetailQuery";
import { Message } from "components/common/styles";
import { useOrderListAction } from "store";
import { useEffect, useState } from "react";

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

  useEffect(() => {
    const scrollTarget = document.querySelector("#root > div");

    let eventHandler = () => {
      if (scrollTarget) {
        if (scrollTarget.scrollTop > 100) {
          setScrollUp(false);
        } else if (scrollTarget.scrollTop <= 100) {
          setScrollUp(true);
        }
      }
    };

    scrollTarget?.addEventListener("scroll", eventHandler);

    return () => {
      scrollTarget?.removeEventListener("scroll", eventHandler);
    };
  }, []);

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
          <>
            <StoreInfo />
            <StorePrice />
            <StoreDetailMain />
          </>
        )
      )}
    </>
  );
}

export default Index;
