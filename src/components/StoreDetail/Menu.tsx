import useLoginCheck from "hooks/useLoginCheck";
import useStoreDetailQuery from "hooks/useStoreDetailQuery";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useUserId } from "store";
import { IMenuItem, StoreDetailInfo } from "types/responseTypes";
import MenuItem from "./MenuItem";
import { MenuBox, OrderButton } from "./styles";

function Menu() {
  const navigate = useNavigate();
  const { storeId } = useParams();
  const userId = useUserId();

  const { data: storeInfo } = useStoreDetailQuery(userId || "0", storeId);
  const { menu } = storeInfo as StoreDetailInfo;

  const onClickButton = useLoginCheck(() => {
    // 주문하시겠습니까 confirm하고
    // true인 경우 주문하기로 페이지로 이동
  });

  return (
    <>
      <MenuBox>
        {menu.map((menuItem: IMenuItem) => (
          <MenuItem key={menuItem.foodName} menuInfo={menuItem} />
        ))}
      </MenuBox>
      <OrderButton onClick={onClickButton}>
        <span>주문</span>하기
      </OrderButton>
    </>
  );
}

export default Menu;
