import React, { useCallback } from "react";
import { useOrderListAction } from "store";
import { IMenuItem } from "types/responseTypes";

interface Props {
  key: string;
  idx: number;
  checked: boolean;
  menuInfo: IMenuItem;
}

function MenuItem({ menuInfo, idx, checked }: Props) {
  const { addMenu, deleteMenu } = useOrderListAction();

  const onClick = useCallback(
    (e: React.MouseEvent<HTMLLabelElement>) => {
      const target = e.target;
      if (!(target instanceof HTMLInputElement)) {
        return;
      }

      if (checked) {
        deleteMenu(idx);
      } else {
        addMenu(idx, { ...menuInfo, orderCount: 1 });
      }
    },
    [addMenu, deleteMenu, checked, idx, menuInfo],
  );

  return (
    <label htmlFor={menuInfo.foodName} id={idx + ""} onClick={onClick}>
      <div className="menu-item">
        <input
          type="checkbox"
          id={menuInfo.foodName}
          checked={checked}
          readOnly
        />
        <div>
          <p className="menu-name">{menuInfo.foodName}</p>
          <p className="menu-price">{menuInfo.foodPrice.toLocaleString()}원</p>
        </div>
        <img
          src={require(`../../assets/images/menuImages/${menuInfo.foodImage}`)}
          alt={menuInfo.foodImage}
        />
      </div>
    </label>
  );
}

export default React.memo(MenuItem);
