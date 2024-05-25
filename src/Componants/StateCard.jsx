import React from "react";

const StateCard = (props) => {
  return (
    <div className="card">
      <i className={props.icon}></i>
      <h1>{props.number}</h1>
      <h4>{props.title}</h4>
    </div>
  );
};

export default StateCard;
