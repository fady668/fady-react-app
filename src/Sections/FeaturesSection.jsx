import React from "react";
import FeatureCard from "../Componants/FeatureCard";
import imgOne from "../imgs/features-01.jpg";
import imgTwo from "../imgs/features-02.jpg";
import imgThree from "../imgs/features-03.jpg";

const FeaturesSection = () => {
  return (
    <div id="features" className="features section">
      <div className="container">
        <div className="special-heading">FEATURES</div>
        <div className="feat-cards">
          <FeatureCard src={imgOne} title={"Quality"} color={"#f44036"} />
          <FeatureCard src={imgTwo} title={"Time"} color={"#009688"} />
          <FeatureCard src={imgThree} title={"Passion"} color={"#03a9f4"} />
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
