import React from "react";
import { Link } from "react-router-dom";
import AuthTemplate from "./AuthTemplate";
import { AuthButton } from "./styles";

export default function Login() {
  return (
    <AuthTemplate>
      <form>
        <fieldset>
          <legend>회원 로그인 폼</legend>
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
          <AuthButton type="submit">로그인</AuthButton>
        </fieldset>
      </form>
      <div className="join">
        혹시, 처음이신가요? <Link to="/signup">회원가입</Link>
      </div>
    </AuthTemplate>
  );
}
