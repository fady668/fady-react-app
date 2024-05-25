import React from "react";
import img from "../imgs/work-steps.png";
import StepCard from "../Componants/StepCard";
import one from "../imgs/work-steps-1.png";
import two from "../imgs/work-steps-2.png";
import three from "../imgs/work-steps-3.png";

const WorkStepSection = () => {
  return (
    <div id="work-steps" className="work-steps section section-gray">
      <div className="container">
        <div className="special-heading">HOW IT WORKS ?</div>
        <div className="steps-con">
          <img src={img} alt="Work-Steps Image" />
          <div className="cards">
            <StepCard
              src={one}
              title="Business Analysis"
              imgAlt="Business Analysis Image"
            />
            <StepCard
              src={two}
              title="Architecture"
              imgAlt="Architecture Image"
            />
            <StepCard
              src={three}
              title="Developement"
              imgAlt="Developement Image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkStepSection;
