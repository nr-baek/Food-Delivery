import styled from "styled-components";
import fullStar from "../../assets/images/fullStar.png";
import emptyStar from "../../assets/images/emptyStar.png";
import reviewBackground from "../../assets/images/reviewBackground.jpg";

export const ReviewWrapper = styled.div`
  background-color: #fff;
  background-image: url(${reviewBackground});
  background-size: 60%;
  background-repeat: no-repeat;
  background-position-x: 0;
  background-position-y: 110%;
  height: 100%;
  h1 {
    font-size: 20px;
    font-family: "jua";
    width: 350px;
    margin: 30px auto 10px auto;
  }
  .prevBtn {
    margin: 10px;
    width: 40px;
    height: 40px;
    font-size: 32px;
    color: #151515;

    &:hover {
      color: #d15c03;
    }
  }

  .q-text {
    font-family: "hanna";
    font-size: 35px;
    margin: 10px auto;
    width: 300px;
    text-align: center;
  }
  ul {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    width: 320px;
    margin: 20px auto;
    li {
      width: 50px;
      height: 50px;
      background-size: cover;
      cursor: pointer;
    }
    .empty-star {
      background-image: url(${emptyStar});
    }
    .full-star {
      background-image: url(${fullStar});
    }
  }

  textarea {
    font-size: 18px;
    height: 170px;
    display: block;
    width: 350px;
    margin: 0 auto;
    resize: none;
    padding: 5px;
  }
  .fail-msg {
    font-family: "hannaPro";
    font-size: 18px;
    color: rgb(231, 0, 0);
    width: 350px;
    height: 18px;
    margin: 10px auto 0 auto;
    text-align: left;
  }
  .number-of-letters {
    width: 350px;
    font-size: 17px;
    margin: 0 auto 10px auto;
    text-align: right;
  }
  .wrap-btn {
    width: 350px;
    margin: 30px auto;
    background-color: pink;
    button {
      font-family: "hanna";
      width: 150px;
      height: 40px;
      float: right;
      border: 0;
      border-radius: 3px;
      background-color: #d15c03;
      color: #fff;
      font-size: 20px;

      &:hover {
        background-color: #e99400;
      }

      &[disabled] {
        background-color: #9a9a9a;
        cursor: auto;
      }
    }
  }
`;
