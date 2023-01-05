import styled from "styled-components";

export const InfoEditForm = styled.div`
  section {
    font-family: "hanna";
    font-size: 17px;
    height: 200px;
    padding: 10px;

    ul {
      height: 100%;
      display: flex;
      flex-flow: column nowrap;
      align-items: center;
      justify-content: center;

      li {
        width: 90%;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        padding-bottom: 20px;

        .label {
          width: 65px;
        }
        .userId {
          width: 300px;
        }

        button,
        input {
          border: 1px solid #aaa;
          border-radius: 3px;
        }
        button {
          padding: 0;
          margin-left: 5px;
          background-color: #c0bebe;
          color: #fff;
          width: 40px;
          height: 32px;
        }
        input {
          width: 255px;
          height: 30px;
          padding: 0 10px;
        }
        .err-msg {
          position: absolute;
          display: block;
          left: 100px;
          bottom: 3px;
          width: 300px;
          font-family: "hanna";
          font-size: 15px;
          color: red;
        }
      }

      .user-info-log {
        font-family: "hannaAir";
        font-size: 12px;
        justify-content: flex-end;
        margin-right: 60px;

        a {
          padding: 0 10px;
        }
      }
    }
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
