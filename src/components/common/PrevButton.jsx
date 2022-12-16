import React from "react";
import { Link } from "react-router-dom";
import { PrevButtonBox } from "./styles";

function PrevButton() {
  return (
    <PrevButtonBox>
      <Link to="/">
        <i class="fas fa-arrow-left prev-btn"></i>
      </Link>
    </PrevButtonBox>
  );
}

export default PrevButton;
