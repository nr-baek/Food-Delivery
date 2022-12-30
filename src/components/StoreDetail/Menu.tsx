import useLoginCheck from "hooks/useLoginCheck";
import useStoreDetailQuery from "hooks/useStoreDetailQuery";
import { useNavigate, useParams } from "react-router-dom";
import { useOrderList } from "store";
import { IMenuItem, StoreDetailInfo } from "types/responseTypes";
import MenuItem from "./MenuItem";
import { MenuBox, OrderButton } from "./styles";

function Menu() {
  const navigate = useNavigate();
  const { storeId } = useParams();
  const { data: storeInfo } = useStoreDetailQuery(storeId);
  const { menu } = storeInfo as StoreDetailInfo;
  const orderList = useOrderList();

  const onClickButton = useLoginCheck(() => {
    navigate(`/order/${storeId}`);
  });

  return (
    <>
      <MenuBox>
        {menu.map((menuItem: IMenuItem, idx) => (
          <MenuItem
            key={menuItem.foodName}
            idx={idx}
            menuInfo={menuItem}
            checked={Boolean(orderList[idx]?.orderCount)}
          />
        ))}
      </MenuBox>
      <OrderButton onClick={onClickButton}>
        <span>주문</span>하기
      </OrderButton>
    </>
  );
}

export default Menu;
