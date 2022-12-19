import React, { useState } from "react";
import AuthTemplate from "./AuthTemplate";
import PrevButton from "../common/PrevButton";
import { AuthButton, Error } from "./styles";
import useInput from "hooks/useInput";
import { useCallback } from "react";
import { ChangeEvent } from "react";

function SignUp() {
  const [id, onChangeId] = useInput("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [nickname, onChangeNickname] = useInput("");
  const [signUpError, setSignUpError] = useState("");
  const [mismatchError, setMismatchError] = useState(false);

  const onChangePassword = useCallback(
    (e: ChangeEvent) => {
      const target = e.target as HTMLInputElement;
      setPassword(target.value);
      setMismatchError(target.value !== passwordCheck);
    },
    [passwordCheck],
  );

  const onChangePasswordCheck = useCallback(
    (e: ChangeEvent) => {
      const target = e.target as HTMLInputElement;
      setPasswordCheck(target.value);
      setMismatchError(target.value !== password);
    },
    [password],
  );

  return (
    <AuthTemplate>
      <form>
        <fieldset>
          <legend>회원가입 폼</legend>
          <div className="input-box">
            <input
              type="text"
              autoComplete="off"
              required
              placeholder="아이디"
              onChange={onChangeId}
            />
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="비밀번호"
              required
              onChange={onChangePassword}
            />
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="비밀번호 확인"
              required
              onChange={onChangePasswordCheck}
            />
          </div>
          <div className="input-box">
            <input
              type="text"
              autoComplete="off"
              placeholder="닉네임"
              onChange={onChangeNickname}
              required
            />
          </div>
          {mismatchError && <Error>비밀번호가 일치하지 않습니다.</Error>}
          {signUpError && <Error>{signUpError}</Error>}
          <AuthButton
            type="submit"
            disabled={
              id && password && passwordCheck && nickname ? false : true
            }
          >
            가입하기
          </AuthButton>
        </fieldset>
      </form>
      <PrevButton />
    </AuthTemplate>
  );
}

export default SignUp;
