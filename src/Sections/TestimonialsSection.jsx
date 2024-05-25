import React from "react";
import PersoneCard from "../Componants/PersoneCard";
import ImgOne from "../imgs/avatar-01.png";
import ImgTwo from "../imgs/avatar-02.png";
import ImgThree from "../imgs/avatar-03.png";
import ImgFour from "../imgs/avatar-04.png";
import ImgFive from "../imgs/avatar-05.png";
import ImgSix from "../imgs/avatar-06.png";

const TestimonialsSection = () => {
  return (
    <div id="testimonials" className="test section section-gray">
      <div className="container">
        <div className="special-heading">TESTIMONIALS</div>
        <div className="pepole-con">
          <PersoneCard src={ImgOne} PersoneName={"Mohamed Farag"} />
          <PersoneCard src={ImgTwo} PersoneName={"Mohamed Ibrahim"} />
          <PersoneCard src={ImgThree} PersoneName={"Shady Nabil"} />
          <PersoneCard src={ImgFour} PersoneName={"Amr Hendawy"} />
          <PersoneCard src={ImgFive} PersoneName={"Sherief Ashraf"} />
          <PersoneCard src={ImgSix} PersoneName={"Osama Mohamed"} />
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
