import React from "react";
import introImg from "../imgs/landing-image.png";
import IntroText from "../Componants/IntroText";

const IntroSection = () => {
  return (
    <div className="intro">
      <div className="container">
        <IntroText />
        <img src={introImg} alt="" className="intro-img" />
      </div>
      <a href="#articles" className="icon">
        <i className="fas fa-angle-double-down fa-2x"></i>
      </a>
    </div>
  );
};

export default IntroSection;
