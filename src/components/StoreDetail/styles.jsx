import styled from "styled-components";

export const StoreInfoBox = styled.div`
  width: 400px;
  margin: 20px auto 40px;
  padding: 30px;
  box-shadow: 0 5px 10px rgb(104, 104, 104);
  text-align: center;
  font-family: "yeonsung";

  .fa-star {
    color: rgb(246, 246, 0);
  }

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
      border-top: 3px solid #000;
      border-bottom: 0;
      color: #000;
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
  background-color: #2ac1bc;
  border-radius: 50%;
  font-size: 20px;
  font-weight: 900;
  color: #eee;

  span {
    display: block;
  }
`;
