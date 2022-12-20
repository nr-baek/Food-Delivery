import React, { ChangeEvent } from "react";
import { useEffect } from "react";
import { useCallback } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLogin, useUserActions } from "store";
import request from "utils/request";
import AuthTemplate from "./AuthTemplate";
import { AuthButton, Error } from "./styles";

const idReg = /^[a-zA-Z0-9]{4,11}$/;
const pwReg = /^[a-zA-Z0-9]{5,15}$/;

export default function Login() {
  const navigate = useNavigate();
  const login = useLogin();
  const userAction = useUserActions();

  const [loading, setLoading] = useState(false);
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [idCheckError, setIdCheckError] = useState("");
  const [pwCheckError, setPwCheckError] = useState("");
  const [loginError, setLoginError] = useState("");

  const onChangeId = useCallback((e: ChangeEvent) => {
    const target = e.target as HTMLInputElement;

    setLoginError("");
    setId(target.value);

    if (!idReg.test(target.value)) {
      setIdCheckError("아이디는 4~11자의 영문 소문자, 숫자입니다.");
    } else {
      setIdCheckError("");
    }
  }, []);

  const onChangePw = useCallback((e: ChangeEvent) => {
    const target = e.target as HTMLInputElement;

    setLoginError("");
    setPassword(target.value);

    if (!pwReg.test(target.value)) {
      setPwCheckError("비밀번호는 5~15자의 영문, 숫자입니다.");
    } else {
      setPwCheckError("");
    }
  }, []);

  const onClickSubmit = useCallback(
    async (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      setLoading(true);

      const user = {
        id,
        password,
      };

      try {
        const response = await request.post("/login", user);
        if (response.ok) {
          const { userId, userNickname } = await response.json();
          userAction.setLogin(true);
          userAction.setId(userId);
          userAction.setNickname(userNickname);
          navigate("/");
        } else if (response.status === 401) {
          setLoginError("아이디 혹은 비밀번호가 일치하지 않습니다.");
        } else {
          throw new (Error as any)("error!");
        }
        setLoading(false);
      } catch (error) {
        setLoginError(error.message);
        setLoading(false);
      }
    },
    [id, password, navigate, userAction],
  );

  useEffect(() => {
    if (!login) {
      // window.alert("이미 로그인 상태입니다.");
      navigate("/");
    }
  }, [login]);

  return (
    <AuthTemplate>
      <form>
        <fieldset>
          <legend>회원 로그인 폼</legend>
          <div className="input-box">
            <input
              type="text"
              autoComplete="off"
              placeholder="아이디"
              value={id}
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
              loading || !(id && password) || idCheckError || pwCheckError
                ? true
                : false
            }
            onClick={onClickSubmit}
          >
            로그인
          </AuthButton>
          <Error>{idCheckError || pwCheckError || loginError}</Error>
        </fieldset>
      </form>
      <div className="join">
        혹시, 처음이신가요? <Link to="/signup">회원가입</Link>
      </div>
    </AuthTemplate>
  );
}
