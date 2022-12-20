import React, { useEffect, useState } from "react";
import AuthTemplate from "./AuthTemplate";
import PrevButton from "../common/PrevButton";
import { AuthButton, Error, Success } from "./styles";
import { useCallback } from "react";
import { ChangeEvent } from "react";
import request from "utils/request";
import { useNavigate } from "react-router-dom";
import { useLogin } from "store";

const idReg = /^[a-zA-Z0-9]{4,11}$/;
const pwReg = /^[a-zA-Z0-9]{5,15}$/;
const nicReg = /^(?=.*[a-z0-9가-힣])[a-z0-9가-힣]{2,16}$/;

function SignUp() {
  const navigate = useNavigate();
  const login = useLogin();

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [nickname, setNickname] = useState("");

  const [idCheckError, setIdCheckError] = useState("");
  const [pwCheckError, setPwCheckError] = useState("");
  const [mismatchError, setMismatchError] = useState("");
  const [nicknameError, setNicknameError] = useState("");
  const [signUpError, setSignUpError] = useState("");
  const [signUpSuccess, setSignUpSuccess] = useState(false);

  const [signupLoading, setSignupLoading] = useState(false);

  const setInit = useCallback(() => {
    setId("");
    setPassword("");
    setPasswordCheck("");
    setNickname("");
  }, []);

  const onChangeId = useCallback((e: ChangeEvent) => {
    const target = e.target as HTMLInputElement;

    setSignUpError("");
    setSignUpSuccess(false);
    setId(target.value);

    if (!idReg.test(target.value)) {
      setIdCheckError("아이디는 4~11자의 영문 소문자, 숫자만 가능합니다.");
    } else {
      setIdCheckError("");
    }
  }, []);

  const onChangePassword = useCallback(
    (e: ChangeEvent) => {
      const target = e.target as HTMLInputElement;
      setPassword(target.value);
      if (!pwReg.test(target.value)) {
        setPwCheckError("비밀번호는 5~15자의 영문, 숫자를 사용하세요.");
      } else {
        setPwCheckError("");
      }
      if (target.value !== passwordCheck) {
        setMismatchError("비밀번호가 일치하지 않습니다.");
      } else {
        setMismatchError("");
      }
    },
    [passwordCheck],
  );

  const onChangePasswordCheck = useCallback(
    (e: ChangeEvent) => {
      const target = e.target as HTMLInputElement;
      setPasswordCheck(target.value);
      if (target.value !== password) {
        setMismatchError("비밀번호가 일치하지 않습니다.");
      } else {
        setMismatchError("");
      }
    },
    [password],
  );

  const onChangeNickname = useCallback((e: ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setNickname(target.value);

    if (!nicReg.test(target.value)) {
      setNicknameError("닉네임은 2~16자의 글자여야합니다.");
    } else {
      setNicknameError("");
    }
  }, []);

  const onClickSubmit = useCallback(
    async (e: React.MouseEvent<HTMLButtonElement>) => {
      setSignupLoading(true);
      e.preventDefault();

      setSignUpError("");
      setSignUpSuccess(false);

      const newUser = {
        id,
        password,
        nickname,
      };

      try {
        const response = await request.post("/signup", newUser);
        if (response.ok) {
          setInit();
          setSignUpSuccess(true);
        } else if (response.status === 409) {
          setSignUpError("중복된 아이디입니다.");
        } else {
          throw new (Error as any)("error!");
        }
        setSignupLoading(false);
      } catch (error) {
        setSignUpError(error.message);
        setSignupLoading(false);
      }
    },
    [id, password, nickname, setInit],
  );

  useEffect(() => {
    if (login) {
      // window.alert("이미 로그인 상태입니다.");
      navigate("/");
    }
  }, [login]);

  return (
    <AuthTemplate>
      <form>
        <fieldset>
          <legend>회원가입 폼</legend>
          <div className="input-box">
            <input
              type="text"
              autoComplete="off"
              placeholder="아이디"
              maxLength={12}
              onChange={onChangeId}
              value={id}
            />
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="비밀번호"
              onChange={onChangePassword}
              value={password}
            />
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="비밀번호 확인"
              value={passwordCheck}
              onChange={onChangePasswordCheck}
            />
          </div>
          <div className="input-box">
            <input
              type="text"
              autoComplete="off"
              placeholder="닉네임"
              maxLength={12}
              value={nickname}
              onChange={onChangeNickname}
            />
          </div>
          {(idCheckError ||
            pwCheckError ||
            nicknameError ||
            mismatchError ||
            signUpError) && (
            <Error>
              {idCheckError ||
                pwCheckError ||
                nicknameError ||
                mismatchError ||
                signUpError}
            </Error>
          )}
          {signUpSuccess && (
            <Success>회원가입되었습니다! 로그인을 해주세요.</Success>
          )}
          <AuthButton
            type="submit"
            disabled={
              id &&
              password &&
              passwordCheck &&
              nickname &&
              !(
                idCheckError ||
                pwCheckError ||
                nicknameError ||
                mismatchError
              ) &&
              !signupLoading
                ? false
                : true
            }
            onClick={onClickSubmit}
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
