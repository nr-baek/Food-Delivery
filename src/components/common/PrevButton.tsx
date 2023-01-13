import React from "react";
import { useNavigate } from "react-router-dom";

function PrevButton() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <button className="prevBtn" onClick={handleGoBack}>
      <i className="fas fa-arrow-left prev-btn"></i>
    </button>
  );
}

export default PrevButton;
