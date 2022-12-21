import styled from "styled-components";

interface SectionProps {
  idx: number;
}

export const StyledSection = styled.section`
  position: relative;
  width: 100%;
  .carousel-wrap {
    width: 508px;
    height: 220px;
    overflow: hidden;
    .ad-item-container {
      display: flex;
      position: absolute;
      transform: translateX(
        ${(props: SectionProps) => `${(props.idx + 1) * -513}px`}
      );
      transition-property: transform;
      transition-duration: 0;
      .ad-item {
        img {
          display: inline-block;
          width: 508px;
          height: 100%;
        }

        &:not(:last-child) {
          padding-right: 5px;
        }
      }

      &.onAnimate {
        transition-duration: 0.5s;
      }
    }
  }

  .ad-control {
    width: 40px;
    padding-bottom: 5px;
    background-color: rgba(0, 0, 0, 0.3);
    font-size: 35px;
    color: #fff;
    position: absolute;
    top: 50%;
    &.prev {
      left: 0;
      transform: translateY(-50%);
    }
    &.next {
      right: 0;
      transform: translateY(-50%);
    }
  }
`;

export const CategoryList = styled.ul`
  display: flex;
  flex-flow: row wrap;
  height: 347px;

  li {
    width: 33%;
    flex-grow: 1;
    text-align: center;
    border: 1px solid #ededed;
    background: linear-gradient(0deg, #fff5e9, white, white);
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
      height: 100%;
      display: flex;
      flex-flow: column nowrap;
      align-items: center;
      justify-content: center;
      padding: 10px 0;
    }
    img {
      width: 50px;
      transition: all ease-out 0.3s;
    }

    &:hover {
      img {
        transform: rotate(20deg);
      }
    }
  }
`;
