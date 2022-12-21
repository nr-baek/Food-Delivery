import React, { useState } from "react";
import { StyledSection } from "./styles";
import ad1 from "../../assets/images/bannerImages/ad1.jpg";
import ad27 from "../../assets/images/bannerImages/ad27.jpg";
import ad14 from "../../assets/images/bannerImages/ad14.jpg";
import ad16 from "../../assets/images/bannerImages/ad16.jpg";
import ad18 from "../../assets/images/bannerImages/ad18.jpg";
import { useEffect } from "react";
import useThrottle from "hooks/useThrottle";

function Banner() {
  const [idx, setIdx] = useState(0);
  const [onAnimate, setOnAnimate] = useState(true);

  const onClickNext = useThrottle(() => {
    setIdx(state => {
      if (state > -1 && state < 5) {
        setOnAnimate(true);
      }
      return state + 1;
    });
  }, 500);
  const onClickPrev = useThrottle(() => {
    setIdx(state => {
      if (state > -1 && state < 5) {
        setOnAnimate(true);
      }
      return state - 1;
    });
  }, 500);

  useEffect(() => {
    let timerId: NodeJS.Timeout;
    if (idx === 5) {
      timerId = setTimeout(() => {
        setIdx(() => {
          setOnAnimate(false);
          return 0;
        });
      }, 500);
    } else if (idx === -1) {
      timerId = setTimeout(() => {
        setOnAnimate(false);
        setIdx(4);
      }, 500);
    }

    const intervalId = setInterval(() => {
      setIdx(state => {
        setOnAnimate(true);
        return state + 1;
      });
    }, 3000);

    return () => {
      clearTimeout(timerId);
      clearInterval(intervalId);
    };
  }, [idx]);

  return (
    <StyledSection idx={idx}>
      <h2 className="a11y-hidden">광고 배너</h2>
      <div className="carousel-wrap">
        <div className={`ad-item-container ${onAnimate ? "onAnimate" : ""}`}>
          <div className="ad-item">
            <img src={ad18} alt="배너5" />
          </div>
          <div className="ad-item">
            <img src={ad1} alt="배너1" />
          </div>
          <div className="ad-item">
            <img src={ad27} alt="배너2" />
          </div>
          <div className="ad-item">
            <img src={ad14} alt="배너3" />
          </div>
          <div className="ad-item">
            <img src={ad16} alt="배너4" />
          </div>
          <div className="ad-item">
            <img src={ad18} alt="배너5" />
          </div>
          <div className="ad-item">
            <img src={ad1} alt="배너1" />
          </div>
        </div>
      </div>

      <button className="ad-control prev" onClick={onClickPrev}>
        &laquo;
      </button>
      <button className="ad-control next" onClick={onClickNext}>
        &raquo;
      </button>
    </StyledSection>
  );
}

export default Banner;
