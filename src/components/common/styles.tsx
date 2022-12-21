import styled from "styled-components";

interface HeaderProps {
  delBtn?: boolean;
}

export const MenuWrapper = styled.div`
  position: sticky;
  bottom: 0;
  border-top: 1px solid #000;
  ul {
    display: flex;
    li {
      flex: 1 1 0;
      &:hover {
        box-shadow: 1px 1px 7px 1px rgb(209, 209, 209) inset;
      }
      &:not(:last-child) {
        border-right: 1px solid #000;
      }

      a {
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        padding: 11px 0;
        img {
          display: inline-block;
          width: 25px;
          padding-bottom: 5px;
        }
      }
    }
  }
`;

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
    text-align: center;
    font-size: 30px;
    font-family: "hanna";
    /* color: #555; */
    color: #d15c03;
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
  width: 510px;
  height: 700px;
  border: 1px solid #000;
  border-radius: 10px;
  font-family: "hanna";
  overflow: scroll;
  display: flex;
  flex-flow: column nowrap;
  user-select: none;
`;
