import React from "react";
import { MenuWrapper } from "./styles";
import { Link, useLocation } from "react-router-dom";

function BottomMenu() {
  const { pathname } = useLocation();

  const isHome =
    pathname === "/" ||
    pathname === "/store/dessert" ||
    pathname === "/store/koreanFood" ||
    pathname === "/store/chineseFood" ||
    pathname === "/store/japaneseFood" ||
    pathname === "/store/fastFood" ||
    pathname === "/store/chicken" ||
    pathname === "/store/pizza" ||
    pathname === "/store/schoolFood" ||
    pathname === "/store/dish";

  const isLikes = pathname === "/likes";
  const isMypage = pathname === "/mypage";

  return (
    <MenuWrapper>
      <ul>
        <li>
          <Link to="/">
            <span className="a11y-hidden">홈</span>
            <i className={`icon fa-solid fa-house ${isHome ? "select" : ""}`} />
          </Link>
        </li>
        <li>
          <Link to="/likes">
            <span className="a11y-hidden">찜한 가게</span>
            <i
              className={`icon fa-solid fa-heart ${isLikes ? "select" : ""}`}
            />
          </Link>
        </li>
        <li>
          <Link to="/mypage">
            <span className="a11y-hidden">마이 페이지</span>
            <i
              className={`icon fa-solid fa-user ${isMypage ? "select" : ""}`}
            />
          </Link>
        </li>
      </ul>
    </MenuWrapper>
  );
}

export default React.memo(BottomMenu);
