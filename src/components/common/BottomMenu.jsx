import React from "react";
import { MenuWrapper } from "./styles";
import home from "../../assets/images/menuIcons/homeIcon.png";
import myPage from "../../assets/images/menuIcons/myPageIcon.svg";
import video from "../../assets/images/menuIcons/videoIcon.svg";
import like from "../../assets/images/menuIcons/zzimIcon.png";
import { Link } from "react-router-dom";

export default function BottomMenu() {
  return (
    <MenuWrapper>
      <ul>
        <li>
          <Link to="/">
            <img src={home} alt="" />홈
          </Link>
        </li>
        <li>
          <Link to="/todayfood">
            <img src={video} alt="" />뭐 먹지?
          </Link>
        </li>
        <li>
          <Link to="/likes">
            <img src={like} alt="" />
            찜한 가게
          </Link>
        </li>
        <li>
          <Link to="/mypage">
            <img src={myPage} alt="" />
            My page
          </Link>
        </li>
      </ul>
    </MenuWrapper>
  );
}
