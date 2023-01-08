import styled from "styled-components";

export const MenuWrapper = styled.div`
  position: sticky;
  bottom: 0;
  border-top: 2px solid #c5c5c5;
  ul {
    display: flex;
    li {
      flex: 1 1 0;
      &:hover {
        a {
          .icon {
            color: #d15c03;
          }
        }
      }
      &:not(:last-child) {
        /* border-right: 1px solid #000; */
      }

      a {
        display: inline-block;
        text-align: center;
        /* height: 100%; */
        width: 100%;
        height: 70px;
        .icon {
          width: 100%;
          color: #b19986;
          font-size: 30px;
          line-height: 69px;

          &.select {
            color: #d15c03;
          }
        }
      }
    }
  }
`;

interface HeaderProps {
  delBtn?: boolean;
}

export const StyledHeader = styled.header`
  position: sticky;
  z-index: 1;
  top: 0;
  padding: 15px 0;
  border-bottom-width: ${(props: HeaderProps) =>
    props.delBtn ? "1px" : "2px"};
  border-bottom-style: solid;
  border-bottom-color: rgb(192, 192, 192);
  /* border-bottom: 2px solid rgb(192, 192, 192); */
  background-color: #fff;

  h1 {
    margin: 0 auto;
    text-align: center;
    font-size: 30px;
    font-family: "hanna";
    /* color: #555; */
    width: 350px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    color: #d15c03;
    opacity: 1;
    transition: all 0.1s ease-in-out;

    &.hide {
      opacity: 0;
    }
  }

  .prevBtn {
    position: absolute;
    left: 10px;
    bottom: 5px;
    padding: 0;
    width: 40px;
    height: 40px;
    font-size: 32px;
    color: #151515;

    &:hover {
      color: #d15c03;
    }
  }
`;

export const Container = styled.div`
  background-color: #fff;
  position: relative;
  margin: 20px auto;
  width: 450px;
  height: 700px;
  box-shadow: 0 9px 15px -3px rgb(0 0 0 / 30%);
  border-radius: 10px;
  font-family: "hanna";
  overflow: scroll;
  display: flex;
  flex-flow: column nowrap;
  user-select: none;
`;

interface IMessage {
  error?: boolean;
}

export const Message = styled.p`
  font-size: 25px;
  text-align: center;
  padding: 100px 0;
  color: ${(props: IMessage) => (props.error ? "red" : "#333")};
`;
