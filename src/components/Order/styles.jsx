import styled from "styled-components";
import emptyImage from "../../assets/images/empty-img.png";
import deleteIcon from "../../assets/images/x-icon.png";

export const GrayWrapper = styled.div`
  background-color: #eee;
  height: 100%;

  .store-info {
    margin: 7px 0;
    background-color: #fff;
    border-bottom: 1px solid #ddd;
    text-indent: 15px;
    .store-name {
      font-family: "dohyeon";
      font-size: 19px;
      padding: 17px 0;
      border-bottom: 1px solid #ddd;
    }
    .delivery-msg {
      padding: 10px 0;
      p {
        margin: 5px 0;
        &:last-child {
          color: #777;
        }
      }
    }
  }
`;

export const DelButton = styled.button`
  position: absolute;
  right: 10px;
  bottom: 10px;
  font-family: "jua";
  padding: 0;
  width: 100px;
  height: 30px;
  font-size: 20px;
  color: #333;

  &:hover {
    color: #d15c03;
  }
`;

export const EmptyBack = styled.div`
  .emptyImg {
    background-image: url(${emptyImage});
    background-size: 80%;
    background-position: center 180%;
    width: 508px;
    height: 430px;
  }
  p {
    vertical-align: bottom;
    display: inline-block;
    width: 100%;
    font-family: "hannaPro";
    font-size: 25px;
    text-align: center;
    color: #777;
  }
`;

export const OrderInfoBox = styled.div`
  background-color: #eee;
  min-height: 635px;

  .order-price-wrap {
    font-family: "dohyeon";
    font-size: 20px;
    display: flex;
    justify-content: space-between;
    padding: 15px 30px;
    background-color: #fff;
    margin: 10px 0;
    border-bottom: 2px solid #ddd;
  }
  .warning-msg {
    font-size: 13px;
    color: #999;
    padding: 15px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    text-align: center;
    p {
      margin: 2px;
    }
  }

  .order-btn-wrap {
    position: sticky;
    bottom: 15px;
    display: flex;
    margin-top: 20px;
    justify-content: center;

    .order-btn {
      width: 420px;
      height: 50px;
      font-size: 19px;
      border: 0;
      border-radius: 4px;
      background-color: #d15c03;
      color: #fff;
      font-family: "dohyeon";
      display: flex;
      align-items: center;
      justify-content: center;
      .list-count-wrap {
        margin: 0 10px;
        width: 25px;
        height: 25px;
        line-height: 28px;
        border-radius: 50%;
        background-color: #fff;
        color: #d15c03;
      }
      .order-price {
        margin-right: 10px;
      }
    }
  }
`;

export const OrderList = styled.ul`
  .order-list {
    background-color: #fff;
    padding: 15px;
    border-bottom: 2px solid #ddd;
    height: 100px;
    position: relative;
    margin: 7px 0;
    .delete-btn {
      padding: 5px;
      width: 43px;
      height: 43px;
      background-image: url(${deleteIcon});
      background-size: contain;
      background-repeat: no-repeat;
      position: absolute;
      top: 0;
      right: 0;
      cursor: pointer;
    }
    .menu-info {
      font-family: "hanna";
      font-size: 18px;
      margin-top: 5px;
      margin-left: 130px;
      .menu-price-wrap {
        margin-top: 10px;
        display: flex;
        flex-wrap: nowrap;
        .menu-price {
          margin-right: 3px;
        }
      }
    }
    .menu-img {
      border: 1px solid #bbb;
      width: 100px;
      height: 69px;
      position: absolute;
      top: 15px;
      left: 15px;
    }
    .counter {
      width: 120px;
      height: 40px;
      position: absolute;
      right: 50px;
      bottom: 15px;
      border: 1px solid #ddd;
      border-radius: 20px;
      display: flex;
      justify-content: space-between;
      font-family: "jua";
      .plus-btn,
      .minus-btn,
      .count {
        width: 40px;
        font-size: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .plus-btn,
      .minus-btn {
        cursor: pointer;
      }
    }
  }
`;
