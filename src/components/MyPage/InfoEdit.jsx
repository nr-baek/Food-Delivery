import React from "react";
import { InfoEditForm } from "./styles";

function InfoEdit() {
  return (
    <InfoEditForm>
      <section>
        <h2 className="a11y-hidden">회원 정보 변경</h2>
        <ul>
          <li>
            <span className="label">아이디</span>
            {/* <p>${userInfo.id}</p> */}
            <span className="userId">test123</span>
          </li>
          <li>
            <span className="label">비밀번호</span>
            <input type="text" placeholder="5 ~ 15자 이내로 입력하세요." />
            <button>변경</button>
            <span className="err-msg"></span>
          </li>
          <li>
            <span className="label">닉네임</span>
            <input type="text" placeholder="${userInfo.nickname}" />
            <button>변경</button>
            <span className="err-msg"></span>
          </li>
          <li className="user-info-log">
            <a href="#">로그아웃</a>|<a href="#">회원탈퇴</a>
          </li>
        </ul>
      </section>
    </InfoEditForm>
  );
}

export default InfoEdit;
