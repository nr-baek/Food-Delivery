import React from "react";
import { useNavigate } from "react-router-dom";
import { UserInfoContainer } from "./styles";

function MoveToLoginPage() {
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/login");
  };

  return (
    <UserInfoContainer>
      <section>
        <button className="loginBtn" onClick={onClick}>
          로그인 하러 가기
        </button>
      </section>
    </UserInfoContainer>
  );
}

export default MoveToLoginPage;
