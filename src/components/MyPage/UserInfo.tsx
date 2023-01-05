import React from "react";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { UserInfoContainer } from "./styles";
import { useUserId, useUserNickname } from "store";
import useUserOrderListQuery from "hooks/useUserOrderListQuery";

function UserInfo() {
  const navigate = useNavigate();

  const userId = useUserId();
  const userNickname = useUserNickname();
  const { data } = useUserOrderListQuery(userId);

  const logOut = useCallback(() => {
    if (window.confirm("로그아웃 하시겠습니까?")) {
      delete localStorage.deliveryApp;
      navigate("/login");
    }
  }, [navigate]);

  return (
    <UserInfoContainer>
      <section>
        <h2 className="a11y-hidden">회원 정보</h2>
        <ul>
          <li>
            <span className="label">🍕 아 이 디</span>:
            <span className="data">{userId}</span>
          </li>
          <li>
            <span className="label">🍕 닉 네 임</span>:
            <span className="data">{userNickname}</span>
          </li>
          <li>
            <span className="label">🍕 총 주문횟수</span>:
            <span className="data">{data?.userOrderList.length} 회</span>
          </li>
        </ul>
      </section>
      <div className="logOutBtn">
        <button onClick={logOut}>
          <i className="fa-solid fa-arrow-right-from-bracket"></i> 로그아웃
        </button>
      </div>
    </UserInfoContainer>
  );
}

export default UserInfo;
