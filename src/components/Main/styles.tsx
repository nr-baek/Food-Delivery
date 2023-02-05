import styled from "styled-components";

interface SectionProps {
  idx: number;
}

export const StyledSection = styled.section`
  position: relative;
  width: 100%;
  overflow: hidden;
  .carousel-wrap {
    width: 450px;
    height: 210px;
    .ad-item-container {
      display: flex;
      position: absolute;
      transform: translateX(
        ${(props: SectionProps) => `${(props.idx + 1) * -455}px`}
      );
      transition-property: transform;
      transition-duration: 0;
      .ad-item {
        img {
          display: inline-block;
          width: 450px;
          height: 210px;
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
  padding: 10px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  height: 360px;

  li {
    width: 27%;
    /* flex-grow: 1; */
    text-align: center;
    background-color: #fff8ef;
    border-radius: 20px;
    margin: 5px;
    opacity: 0.9;
    a {
      height: 100%;
      display: flex;
      flex-flow: column nowrap;
      align-items: center;
      justify-content: center;
      padding: 10px 0;
    }
    img {
      height: 50px;
      width: 50px;
      transition: all ease-out 0.3s;
    }

    &:hover {
      background-color: #ffdeb2;
      opacity: 1;
      img {
        opacity: 1;
        transform: rotate(20deg);
      }
    }
  }
`;
