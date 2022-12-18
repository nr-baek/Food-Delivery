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
            <input type="text" autoComplete="off" placeholder="아이디" />
            <em className="fail-msg"></em>
          </div>
          <div className="input-box">
            <input type="password" placeholder="비밀번호" />
            <em className="fail-msg"></em>
          </div>
          <div className="input-box">
            <input type="password" placeholder="비밀번호 확인" />
            <em className="fail-pw-check-msg"></em>
          </div>
          <div className="input-box">
            <input type="text" autoComplete="off" placeholder="닉네임" />
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
