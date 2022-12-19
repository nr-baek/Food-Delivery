import React from "react";
import { AuthTemplateBox } from "./styles";
import logo from "../../assets/images/logo.png";

interface Props {
  children: React.ReactNode;
}

function AuthTemplate({ children }: Props) {
  return (
    <AuthTemplateBox>
      <img src={logo} alt="logo" />
      {children}
    </AuthTemplateBox>
  );
}

export default AuthTemplate;
