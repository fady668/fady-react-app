import React from "react";
import cornerImg from "../imgs/dots.png";
import PricingCard from "../Componants/PricingCard";
import imgOne from "../imgs/hosting-basic.png";
import imgTow from "../imgs/hosting-advanced.png";
import imgThree from "../imgs/hosting-professional.png";

const PricingPlansSection = () => {
  return (
    <div className="pricing section section-gray" id="pricing">
      <img className="corner-img left" src={cornerImg} alt="Dots Image" />
      <img className="corner-img right" src={cornerImg} alt="Dots Image" />
      <div className="container">
        <div className="special-heading">PRICING PLANS</div>
        <div className="cards">
          <PricingCard
            title="Basic"
            src={imgOne}
            price="15"
            gb="10"
            emails="5"
            sub="2"
            db="4"
          />
          <PricingCard
            title="Advanced"
            src={imgTow}
            price="25"
            gb="20"
            emails="10"
            sub="5"
            db="8"
          />
          <PricingCard
            title="Professional"
            src={imgThree}
            price="45"
            gb="50"
            emails="20"
            sub="10"
            db="20"
          />
        </div>
      </div>
    </div>
  );
};

export default PricingPlansSection;
