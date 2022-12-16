import styled from "styled-components";

export const StyledBill = styled.div`
  .order-info {
    padding: 15px 30px 10px 30px;
    border-bottom: 7px solid #eee;
    p {
      margin: 15px 0;
    }
    .order-completed-msg {
      font-family: "jua";
      color: #d15c03;
      font-size: 19px;
    }
    .store-name {
      font-family: "dohyeon";
      font-size: 25px;
    }
    .order-sum {
      font-size: 20px;
    }

    .order-date {
      color: #888;
    }
  }

  h2 {
    font-family: "jua";
    padding: 15px 30px;
    border-bottom: 2px solid #eee;
    font-size: 20px;
  }

  ul {
    font-family: "yeonsung";
    padding: 15px 30px;
    .order-list {
      font-size: 20px;
      border-bottom: 2px solid #eee;
      div {
        padding-right: 20px;
        text-align: right;
        margin: 10px 0;
      }
      .menu-name {
        text-align: left;
        font-size: 23px;
      }
    }
  }

  .totalOrderedPrice {
    font-family: "hannaPro";
    font-size: 25px;
    padding: 10px 35px 30px 35px;
    display: flex;
    justify-content: space-between;

    .priceTitle {
      color: #d15c03;
    }
  }
`;
