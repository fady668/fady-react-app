import React from "react";

const ServiceCard = (props) => {
  return (
    <div className="service-card">
      <i className={props.ico}></i>
      <h2>{props.title}</h2>
      <div className="card-footer">
        <span>{props.count}</span>
        <a href="#">Details</a>
      </div>
    </div>
  );
};

export default ServiceCard;
