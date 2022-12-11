import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  font-size: 20px;
  background-color: #fff;
  cursor: pointer;
  p {
    margin-right: 10px;
  }
  img {
    width: 25px;
  }
`;

export const StyledSection = styled.section`
  padding-bottom: 10px;
  position: relative;
  width: 510px;
  /* height: 180px; */
  /* border-bottom: 1px solid #ddd; */
  .ad-item-container {
    display: flex;
    width: 510px;
    height: 220px;
  }
  .ad-item:not(:last-child) {
    padding-right: 5px;
  }
  img {
    width: 510px;
    height: 100%;
  }
  .ad-control {
    width: 40px;
    padding-bottom: 5px;
    background-color: rgba(0, 0, 0, 0.3);
    font-size: 35px;
    color: #fff;
    outline: none;
  }
  .prev {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  }
  .next {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  }
`;

export const CategoryList = styled.ul`
  display: flex;
  flex-flow: row wrap;

  li {
    width: 33%;
    flex-grow: 1;
    text-align: center;
    border: 1px solid #ededed;
    /* border-radius: 10px; */
    &:first-child {
      border-top: none;
      border-radius: 0 0 10px 0;
    }
    &:nth-child(2) {
      border-top: none;
      border-radius: 0 0 10px 10px;
    }
    &:nth-child(3) {
      border-top: none;
      border-radius: 0 0 0 10px;
    }
    &:nth-child(4) {
      border-radius: 0 10px 10px 0;
    }
    &:nth-child(5) {
      border-radius: 10px;
    }
    &:nth-child(6) {
      border-radius: 10px 0 0 10px;
    }
    &:nth-child(7) {
      border-bottom: none;
      border-radius: 0 10px 0 0;
    }
    &:nth-child(8) {
      border-bottom: none;
      border-radius: 10px 10px 0 0;
    }
    &:nth-child(9) {
      border-bottom: none;
      border-radius: 10px 0 0 0;
    }
    a {
      display: flex;
      flex-flow: column nowrap;
      align-items: center;
      padding: 10px 0;
    }
    img {
      width: 50px;
      transition: all ease-out 0.3s;
      &:hover {
        transform: rotate(20deg);
      }
    }
  }
`;

export const StyledForm = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 20px;
  flex-grow: 1;
  /* background-image: url(../img/paper.jpg); */
  label {
    display: inline-block;
    width: 420px;
    padding: 0 15px;
    border: 1px solid #000;
    border-radius: 20px;
    box-sizing: border-box;
    outline: none;
    &:focus-visible {
      box-sizing: border-box;
      outline: none;
      border: 2px solid #2ac1bc;
      border-radius: 20px;
      padding: 10px 14px;
    }

    input {
      display: inline-block;
      width: 100%;
      border: 0;
      padding: 10px 0;
    }
  }
`;
