import React, { useEffect, useState } from "react";
import AuthTemplate from "./AuthTemplate";
import PrevButton from "../common/PrevButton";
import { AuthButton, Error, Success } from "./styles";
import { useCallback } from "react";
import { ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../firebase";
import { getDatabase, ref, set } from "firebase/database";
import { useUserNickname } from "store";

const pwReg = /^[a-zA-Z0-9]{6,15}$/;
const nicReg = /^(?=.*[a-z0-9가-힣])[a-z0-9가-힣]{2,16}$/;

function SignUp() {
  const navigate = useNavigate();

  const checkingNickname = useUserNickname();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [nickname, setNickname] = useState("");

  const [pwCheckError, setPwCheckError] = useState("");
  const [mismatchError, setMismatchError] = useState("");
  const [nicknameError, setNicknameError] = useState("");
  const [signUpError, setSignUpError] = useState("");
  const [signUpSuccess, setSignUpSuccess] = useState(false);

  const [signupLoading, setSignupLoading] = useState(false);

  const setInit = useCallback(() => {
    setEmail("");
    setPassword("");
    setPasswordCheck("");
    setNickname("");
  }, []);

  const onChangeEmail = useCallback((e: ChangeEvent) => {
    const target = e.target as HTMLInputElement;

    setSignUpError("");
    setSignUpSuccess(false);
    setEmail(target.value);
  }, []);

  const onChangePassword = useCallback(
    (e: ChangeEvent) => {
      const target = e.target as HTMLInputElement;
      setPassword(target.value);
      if (!pwReg.test(target.value)) {
        setPwCheckError("비밀번호는 6~15자의 영문, 숫자를 사용하세요.");
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

  const onClickSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    try {
      e.preventDefault();

      setSignupLoading(true);
      setSignUpError("");
      setSignUpSuccess(false);

      let createdUser = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );

      if (auth.currentUser) {
        await updateProfile(auth.currentUser, {
          displayName: nickname,
        });
      }

      await set(ref(getDatabase(), `users/${createdUser.user.uid}`), {
        nickname,
        likes: [],
        orderList: [],
      });

      setSignUpSuccess(true);
      setInit();

      setTimeout(() => {
        setSignupLoading(false);
        signOut(auth);
        navigate("/login");
      }, 1500);
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        setSignUpError("이미 가입된 이메일입니다.");
      } else {
        setSignUpError(error.code);
      }
      setSignupLoading(false);
      setTimeout(() => {
        setSignUpError("");
      }, 5000);
    }
  };

  useEffect(() => {
    if (checkingNickname) {
      alert("현재 로그인된 상태입니다.");
      navigate("/");
    }
  }, [checkingNickname, navigate]);

  return (
    <AuthTemplate>
      <form>
        <fieldset>
          <legend>회원가입 폼</legend>
          <div className="input-box">
            <input
              type="email"
              autoComplete="off"
              placeholder="이메일"
              onChange={onChangeEmail}
              value={email}
            />
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="비밀번호"
              minLength={6}
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
          {(pwCheckError || nicknameError || mismatchError || signUpError) && (
            <Error>
              {pwCheckError || nicknameError || mismatchError || signUpError}
            </Error>
          )}
          {signUpSuccess && (
            <Success>회원가입 완료! 로그인 화면으로 이동합니다.</Success>
          )}
          <AuthButton
            type="submit"
            disabled={
              email &&
              password &&
              passwordCheck &&
              nickname &&
              !(pwCheckError || nicknameError || mismatchError) &&
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
