import React from "react";

const FeatureCard = (props) => {
  return (
    <div className="feat-card">
      <div className="img">
        <img src={props.src} alt="Feature Image" />
        <span
          className="img-cover"
          style={{ backgroundColor: props.color }}
        ></span>
      </div>
      <h1>{props.title}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit harum hic
        veniam eligendi minima
      </p>
      <div className="btn">More</div>
    </div>
  );
};

export default FeatureCard;
