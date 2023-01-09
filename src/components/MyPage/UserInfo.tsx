import React from "react";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { UserInfoContainer } from "./styles";
import { useUserActions, useUserId, useUserNickname } from "store";
import useUserOrderListQuery from "hooks/useUserOrderListQuery";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

function UserInfo() {
  const navigate = useNavigate();

  const userId = useUserId();
  const userNickname = useUserNickname();
  const { data } = useUserOrderListQuery(userId);

  const { setInit } = useUserActions();

  const logOut = useCallback(() => {
    if (window.confirm("로그아웃 하시겠습니까?")) {
      setInit();
      signOut(auth);
      navigate("/login");
    }
  }, [navigate, setInit]);

  return (
    <UserInfoContainer>
      <section>
        <h2 className="a11y-hidden">회원 정보</h2>
        <ul>
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
