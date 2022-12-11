import React from "react";
import { StyledSection } from "./styles";
import ad1 from "../../assets/images/bannerImages/ad1.jpg";
import ad27 from "../../assets/images/bannerImages/ad27.jpg";
import ad14 from "../../assets/images/bannerImages/ad14.jpg";
import ad16 from "../../assets/images/bannerImages/ad16.jpg";
import ad18 from "../../assets/images/bannerImages/ad18.jpg";

function Banner() {
  return (
    <StyledSection>
      <h2 className="a11y-hidden">광고 배너</h2>
      <div className="ad-item-container">
        <div className="ad-item">
          <a href="#">
            <img src={ad1} alt="" />
          </a>
        </div>
        <div className="ad-item">
          <a href="#">
            <img src={ad27} alt="" />
          </a>
        </div>
        <div className="ad-item">
          <a href="#">
            <img src={ad14} alt="" />
          </a>
        </div>
        <div className="ad-item">
          <a href="#">
            <img src={ad16} alt="" />
          </a>
        </div>
        <div className="ad-item">
          <a href="#">
            <img src={ad18} alt="" />
          </a>
        </div>
      </div>
      <button className="ad-control prev">&laquo;</button>
      <button className="ad-control next">&raquo;</button>
    </StyledSection>
  );
}

export default Banner;
