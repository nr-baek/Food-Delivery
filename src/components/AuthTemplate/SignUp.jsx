import React from "react";
import AuthTemplate from "./AuthTemplate";
import PrevButton from "../common/PrevButton";
import { AuthButton } from "./styles";

function SignUp() {
  return (
    <AuthTemplate>
      <form>
        <fieldset>
          <legend>회원가입 폼</legend>
          <div className="input-box">
            <input
              type="text"
              id="userId"
              autocomplete="off"
              placeholder="아이디"
            />
            <em className="fail-msg"></em>
          </div>
          <div className="input-box">
            <input type="password" id="userPw" placeholder="비밀번호" />
            <em className="fail-msg"></em>
          </div>
          <div class="input-box">
            <input type="password" id="pwCheck" placeholder="비밀번호 확인" />
            <em class="fail-pw-check-msg"></em>
          </div>
          <div className="input-box">
            <input
              type="text"
              id="userId"
              autocomplete="off"
              placeholder="닉네임"
            />
            <em className="fail-msg"></em>
          </div>
          <AuthButton type="submit">가입하기</AuthButton>
        </fieldset>
      </form>
      <PrevButton />
    </AuthTemplate>
  );
}

export default SignUp;
