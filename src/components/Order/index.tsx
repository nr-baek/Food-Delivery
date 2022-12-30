import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../common/Header";
import OrderInfo from "./OrderInfo";
import { GrayWrapper } from "./styles";
import { useStoreId } from "../../store";

function Index() {
  const navigate = useNavigate();

  const { storeId } = useParams();
  const orderId = useStoreId();

  useEffect(() => {
    if (storeId !== orderId) {
      alert("잘못된 접근입니다.");
      navigate("/");
    }
  }, [storeId, orderId, navigate]);

  return (
    <GrayWrapper>
      <Header prevBtn={true} delBtn={true}>
        주문하기
      </Header>
      <OrderInfo />
    </GrayWrapper>
  );
}

export default Index;
