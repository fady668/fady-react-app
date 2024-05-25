import React from "react";

const SkillPersent = (props) => {
  return (
    <div className="skill-per">
      <div className="flex">
        <p>{props.name}</p>
        <p>{props.persent}</p>
      </div>
      <div className="per-view">
        <span style={{ width: props.persent }}></span>
      </div>
    </div>
  );
};

export default SkillPersent;
