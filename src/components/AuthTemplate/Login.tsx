import React, { ChangeEvent } from "react";
import { useEffect } from "react";
import { useCallback } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserNickname } from "store";
import AuthTemplate from "./AuthTemplate";
import { AuthButton, Error } from "./styles";

import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const pwReg = /^[a-zA-Z0-9]{6,15}$/;

export default function Login() {
  const navigate = useNavigate();
  const nickname = useUserNickname();

  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pwCheckError, setPwCheckError] = useState("");
  const [loginError, setLoginError] = useState("");

  const onChangeId = useCallback((e: ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setEmail(target.value);
  }, []);

  const onChangePw = useCallback((e: ChangeEvent) => {
    const target = e.target as HTMLInputElement;

    setLoginError("");
    setPassword(target.value);

    if (!pwReg.test(target.value)) {
      setPwCheckError("비밀번호는 6~15자의 영문, 숫자입니다.");
    } else {
      setPwCheckError("");
    }
  }, []);

  const onClickSubmit = useCallback(
    async (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      try {
        setLoading(true);
        await signInWithEmailAndPassword(auth, email, password);
        navigate("/");
        setLoading(false);
      } catch (error) {
        console.log(error);
        if (
          error.code === "auth/user-not-found" ||
          error.code === "auth/wrong-password"
        ) {
          setLoginError("아이디 혹은 비밀번호가 일치하지 않습니다.");
        } else {
          setLoginError(error.code);
        }

        setLoading(false);
      }
    },
    [email, password, navigate],
  );

  useEffect(() => {
    if (!loading && nickname) {
      alert("이미 로그인 상태입니다.");
      navigate("/");
    }
  }, [nickname, navigate, loading]);

  return (
    <AuthTemplate>
      <form>
        <fieldset>
          <legend>회원 로그인 폼</legend>
          <div className="input-box">
            <input
              type="email"
              autoComplete="off"
              placeholder="아이디"
              value={email}
              onChange={onChangeId}
            />
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="비밀번호"
              value={password}
              onChange={onChangePw}
            />
          </div>
          <AuthButton
            type="submit"
            disabled={
              loading || !(email && password) || pwCheckError ? true : false
            }
            onClick={onClickSubmit}
          >
            로그인
          </AuthButton>
          <Error>{pwCheckError || loginError}</Error>
        </fieldset>
      </form>
      <div className="join">
        혹시, 처음이신가요? <Link to="/signup">회원가입</Link>
      </div>
    </AuthTemplate>
  );
}
