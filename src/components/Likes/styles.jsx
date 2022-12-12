import styled from "styled-components";

export const StyledContainer = styled.ul`
  font-family: "yeonsung";
  display: flex;
  flex-flow: column;
  flex-grow: 1;
  overflow: auto;
  li a {
    display: flex;
    padding: 15px 15px;
    border-bottom: 1px solid rgb(192, 192, 192);
    img {
      margin-right: 15px;
      width: 80px;
      height: 80px;
      object-fit: cover;
      border-radius: 15px;
    }
    .store-description {
      p {
        margin-bottom: 5px;
        i {
          margin-right: 5px;
        }
      }
      .store-name {
        font-weight: 900;
      }

      .fa-star {
        color: rgb(246, 246, 0);
      }
    }
  }
`;
