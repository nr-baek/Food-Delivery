import Header from "../common/Header";
import StoreInfo from "./StoreInfo";
import StoreDetailMain from "./StoreDetailMain";
import StorePrice from "./StorePrice";
import { useParams } from "react-router-dom";
import useStoreDetailQuery from "hooks/useStoreDetailQuery";
import { Message } from "components/common/styles";

function Index() {
  const { storeId } = useParams();

  const {
    isLoading,
    data: storeInfo,
    isError,
    error,
  } = useStoreDetailQuery(storeId);

  return (
    <>
      <Header prevBtn={true}>
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
