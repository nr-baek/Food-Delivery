import React, { useState } from "react";
import Menu from "./Menu";
import ReviewList from "./ReviewList";
import { StyledTabBox } from "./styles";

function StoreDetailMain() {
  const [selectedTab, setSelectedTab] = useState("menu");

  return (
    <>
      <StyledTabBox>
        <button
          className={selectedTab === "menu" ? "selected" : ""}
          onClick={() => setSelectedTab("menu")}
        >
          메뉴
        </button>
        <button
          className={selectedTab === "review" ? "selected" : ""}
          onClick={() => setSelectedTab("review")}
        >
          리뷰
        </button>
      </StyledTabBox>
      {selectedTab === "menu" ? <Menu /> : <ReviewList />}
    </>
  );
}

export default StoreDetailMain;
