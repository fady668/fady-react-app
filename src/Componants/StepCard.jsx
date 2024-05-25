import React from "react";

const StepCard = (props) => {
  return (
    <div className="card">
      <img src={props.src} alt={props.imgAlt} />
      <div className="card-text">
        <h2>{props.title}</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
          nesciunt obcaecati quisquam quis laborum recusandae debitis vel
        </p>
      </div>
    </div>
  );
};

export default StepCard;
