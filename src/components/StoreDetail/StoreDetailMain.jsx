import React, { useState } from "react";
import Menu from "./Menu";
import { StyledTabBox } from "./styles";

function StoreDetailMain() {
  const [selectedTab, setSelectedTab] = useState("menu");

  return (
    <>
      <StyledTabBox>
        <button
          class={selectedTab === "menu" && "selected"}
          onClick={() => setSelectedTab("menu")}
        >
          메뉴
        </button>
        <button
          class={selectedTab === "review" && "selected"}
          onClick={() => setSelectedTab("review")}
        >
          리뷰
        </button>
      </StyledTabBox>
      {selectedTab === "menu" ? <Menu /> : ""}
    </>
  );
}

export default StoreDetailMain;
