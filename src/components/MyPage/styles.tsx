import styled from "styled-components";

export const UserInfoContainer = styled.div`
  height: 200px;
  font-family: "hanna";

  section {
    font-size: 17px;
    padding: 10px 10px 0 10px;

    ul {
      padding-top: 20px;
      li {
        margin: 0 auto;
        width: 80%;
        position: relative;
        padding-bottom: 20px;

        .label {
          display: inline-block;
          width: 105px;
        }
        .data {
          margin-left: 10px;
        }
      }
    }
  }

  button {
    border: 2px solid #333;
    border-radius: 5px;
    color: #333;
    font-family: "hanna";

    &:hover {
      background-color: #f86b00;
      color: #fff;
    }
  }

  .logOutBtn {
    width: 100%;
    text-align: right;
    button {
      padding: 5px;
      margin-top: 30px;
      margin-right: 30px;
      display: inline-block;
      font-size: 16px;
      width: 100px;
    }
  }

  .loginBtn {
    display: block;
    margin: 40px auto;
    padding: 10px;
    width: 200px;
    font-size: 23px;
  }
`;

export const OrderSection = styled.section`
  background-color: #eee;

  h2 {
    font-size: 25px;
    text-align: center;
    line-height: 50px;
    height: 50px;
    border-bottom: 1px solid #000;
    border-top: 1px solid #000;
    background-color: #fff;
  }

  ul {
    overflow: auto;
    height: 316px;
    .message {
      height: 316px;
      display: flex;
      flex-flow: column;
      justify-content: center;
      p {
        padding-bottom: 20px;
        text-align: center;
        font-size: 20px;
      }
    }
  }
`;

export const ItemList = styled.li`
  display: block;
  background-color: #fff;
  padding: 15px;
  border-bottom: 2px solid #ddd;
  height: 80px;
  margin: 7px 0;

  .storeInfo {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .storeName {
      font-size: 20px;
      color: #d15c03;
      overflow: hidden;
      color: #222;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    a {
      white-space: nowrap;
      border: 1px solid #666;
      border-radius: 4px;
      padding: 3px 5px;
      &:hover {
        color: #a54801;
      }
    }
  }

  .orderInfo {
    margin-top: 17px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .amount {
      font-size: 17px;
      text-align: right;
      color: #222;
    }

    .orderDate {
      color: #666;
      font-size: 14px;
      text-align: right;
    }
  }
`;
