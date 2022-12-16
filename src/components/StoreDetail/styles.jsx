import styled from "styled-components";

export const StoreInfoBox = styled.div`
  width: 400px;
  margin: 20px auto 40px;
  padding: 30px;
  box-shadow: 0 5px 10px rgb(104, 104, 104);
  text-align: center;
  font-family: "yeonsung";

  .store-name {
    display: inline-block;
    margin-bottom: 20px;
    font-size: 40px;
    font-weight: 900;
  }

  .store-info {
    margin-bottom: 20px;
    font-size: 20px;

    i {
      margin-right: 5px;
    }
  }

  .store-connect {
    display: flex;

    button {
      flex-grow: 1;
      border-right: 1px solid #000;
      font-size: 20px;
      cursor: pointer;
      outline: none;

      i {
        margin-right: 5px;
      }

      .dib {
        color: red;
      }

      &:last-child {
        border-right: 0;
      }
    }
  }
`;

export const StorePriceBox = styled.div`
  width: 400px;
  margin: 0 auto 40px;
  padding: 25px 0;
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
  font-size: 20px;
  font-family: "yeonsung";

  p {
    margin-bottom: 10px;

    &:last-child {
      margin-bottom: 0;
    }

    span {
      display: inline-block;
      width: 120px;
    }
  }
`;

export const StyledTabBox = styled.div`
  display: flex;
  width: 400px;
  margin: 0 auto;

  button {
    flex-grow: 1;
    padding: 10px 0;
    border-top: 1px solid #000;
    border-bottom: 1px solid #000;
    border-right: 1px solid #000;
    font-size: 20px;
    font-weight: 900;
    color: rgb(192, 192, 192);

    &:last-child {
      border-right: 0;
    }

    &.selected {
      border-top: 3px solid #d15c03;
      border-bottom: 0;
      color: #964100;
    }
  }
`;

export const MenuBox = styled.div`
  font-family: "yeonsung";
  width: 400px;
  margin: 0 auto;

  label {
    .menu-item {
      display: flex;
      padding: 15px 10px;
      border-bottom: 1px solid #000;
      input {
        width: 15px;
        height: 15px;
      }
      div {
        flex-grow: 1;
        .menu-name {
          margin-bottom: 15px;
          font-size: 25px;
        }
        .menu-price {
          font-size: 18px;
        }
      }
      img {
        width: 90px;
        height: 90px;
        border-radius: 5px;
        object-fit: cover;
      }
    }

    &:last-child > .menu-item:last-child {
      border-bottom: 0;
    }
  }
`;

export const OrderButton = styled.button`
  position: sticky;
  left: 390px;
  bottom: 15px;
  width: 75px;
  height: 75px;
  padding: 14px 0;
  background-color: #d15c03;
  border-radius: 50%;
  font-size: 20px;
  font-weight: 900;
  color: #eee;

  span {
    display: block;
  }

  &:hover {
    background-color: #e99400;
  }
`;

export const ReviewInfoBox = styled.div`
  width: 400px;
  margin: 0 auto;
  display: flex;
  padding: 20px 15px;
  border-bottom: 1px solid #000;
  font-family: "yeonsung";
  span {
    flex-grow: 1;
    padding-top: 5px;
    font-size: 20px;
    span {
      display: inline-block;
      margin-right: 10px;
    }
  }

  a {
    font-family: "hannaPro";
    border: 0;
    background-color: transparent;
    font-size: 20px;
    cursor: pointer;
    color: #d15c03;

    &:hover {
      color: #e99400;
    }
  }
`;

export const ReviewItemBox = styled.div`
  padding: 15px;
  width: 400px;
  margin: 0 auto;
  border-bottom: 1px solid #000;
  font-family: "yeonsung";

  &:last-child {
    border-bottom: 0;
  }
  .review-nick {
    margin-bottom: 10px;
    font-size: 20px;
  }
  .review-date {
    margin-bottom: 10px;
    span {
      margin-right: 20px;
    }
  }
  .review-txt {
    font-size: 19px;
    line-height: 1.4;
  }
`;
