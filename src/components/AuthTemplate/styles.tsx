import styled from "styled-components";

export const AuthTemplateBox = styled.div`
  background-color: #fff;
  padding: 40px;
  width: 100%;
  img {
    display: block;
    margin: 0 auto;
    width: 150px;
    height: 160px;
  }
  form {
    width: 320px;
    margin: 45px auto;
    .input-box {
      position: relative;
      margin-bottom: 28px;
      &:last-of-type {
        margin-bottom: 30px;
      }

      input {
        display: inline-block;
        width: 100%;
        padding: 10px;
        border: 0;
        border-bottom: 2px solid #aaa;
        font-size: 17px;
        outline-style: none;
        &:focus-visible {
          border-bottom: 2px solid #d15c03;
        }
      }
    }

    p {
      text-align: right;
      display: inline-block;
      font-size: 15px;
      width: 320px;
      word-break: break-all;
    }
  }
  .join {
    font-family: "hanna";
    text-align: center;
    width: 320px;
    margin: 10px auto;
    font-size: 20px;
    a {
      color: #d15c03;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  .prev-btn {
    position: absolute;
    top: 20px;
    left: 20px;
    font-size: 32px;
    color: #333;
    &:hover {
      color: #d15c03;
    }
  }
`;

export const AuthButton = styled.button`
  font-family: "hanna";
  width: 320px;
  height: 40px;
  margin: 10px 0 15px 0;
  border: 0;
  background-color: #d15c03;
  color: #fff;
  font-size: 20px;
  letter-spacing: 2px;

  &:hover {
    background-color: #e99400;
  }

  &[disabled] {
    background-color: #c0c0c0;
  }
`;

export const Error = styled.p`
  color: #c30000;
`;

export const Success = styled.p`
  color: #00710b;
`;
