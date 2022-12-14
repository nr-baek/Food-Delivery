import styled from "styled-components";

export const InfoEditForm = styled.div`
  display: flex;
  flex-flow: column;
  /* flex-grow: 1; */
  /* height: 100%; */
  /* overflow: auto; */

  section {
    font-family: "hanna";
    font-size: 17px;
    height: 200px;
    padding: 10px;
    /* position: relative; */

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
        /* background-color: pink; */

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
  flex: 1 1 auto;
  background-color: #eee;

  h2 {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    border-bottom: 1px solid #000;
    border-top: 1px solid #000;
    background-color: #fff;
  }
  ul {
    font-family: "yeonsung";
  }
`;

export const ItemList = styled.li`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  background-color: #fff;
  padding: 15px;
  border-bottom: 2px solid #ddd;
  height: 100px;
  margin: 7px 0;
  span {
    display: inline-block;
    width: 380px;
    border-bottom: 1px solid #ddd;

    span {
      margin-right: 10px;
    }

    span:first-child {
      font-family: "jua";
      font-size: 24px;
    }
    span:nth-of-type(2) {
      font-size: 20px;
    }
  }

  a {
    font-family: "jua";
    border: 1px solid #ddd;
    border-radius: 3px;
    padding: 5px;
    margin-left: 10px;
    margin-bottom: 10px;
  }
`;
