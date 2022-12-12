import styled from "styled-components";

export const MenuWrapper = styled.div`
  position: sticky;
  bottom: 0;
  border-top: 1px solid #000;
  background-color: #fff;
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
        padding: 5px 0;
        img {
          display: inline-block;
          width: 35px;
          padding-bottom: 5px;
        }
      }
    }
  }
`;

export const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  padding: 15px 0;
  border-bottom: 2px solid rgb(192, 192, 192);
  background-color: #fff;

  h1 {
    text-align: center;
    font-size: 25px;
    font-family: "yeonsung";
  }
`;
