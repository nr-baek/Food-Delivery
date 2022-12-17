import React from "react";
import { AuthTemplateBox } from "./styles";
import logo from "../../assets/images/logo.png";

function AuthTemplate({ children }) {
  return (
    <AuthTemplateBox>
      <img src={logo} alt="logo" />
      {children}
    </AuthTemplateBox>
  );
}

export default AuthTemplate;
