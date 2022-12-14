import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  padding-top: 100px;
  font-size: 50px;
  color: #555;
  text-align: center;
  display: flex;
  flex-flow: column;
  flex-grow: 1;
`;

function index() {
  return <StyledDiv>오늘 뭐먹지?</StyledDiv>;
}

export default index;
