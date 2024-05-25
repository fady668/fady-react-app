import React from "react";

const PricingCard = (props) => {
  return (
    <div className="plan-card">
      <span className="mid">Most Popular</span>
      <h3>{props.title}</h3>
      <img src={props.src} alt="" />
      <h1>${props.price}</h1>
      <p className="p-len">Per Month</p>
      <p>{props.gb}GB HDD Space</p>
      <p>{props.emails} Email Addresses</p>
      <p>{props.sub} Subdomains</p>
      <p>{props.db} Databases</p>
      <p>{props.title} Support</p>
      <span className="btn">Choose Plan</span>
    </div>
  );
};

export default PricingCard;
