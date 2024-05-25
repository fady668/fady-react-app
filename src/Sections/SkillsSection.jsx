import React from "react";
import img from "../imgs/skills.png";
import SkillPersent from "../Componants/SkillPersent";

const SkillsSection = () => {
  return (
    <div id="our-skills" className="skills section">
      <div className="container">
        <div className="special-heading">OUR SKILLS</div>
        <div className="skills-con">
          <img src={img} alt="" />
          <div className="persents">
            <SkillPersent name="HTML" persent="80%" />
            <SkillPersent name="CSS" persent="85%" />
            <SkillPersent name="JavaScript" persent="70%" />
            <SkillPersent name="Python" persent="80%" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
