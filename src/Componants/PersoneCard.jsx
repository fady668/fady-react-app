import React from "react";

const PersoneCard = (props) => {
  return (
    <div className="persone-card">
      <img src={props.src} alt="Persone Image" />
      <h2>{props.PersoneName}</h2>
      <h4>Full-Stack Developer</h4>
      <div className="stars">
        <i className="filled fas fa-star"></i>
        <i className="filled fas fa-star"></i>
        <i className="filled fas fa-star"></i>
        <i className="filled fas fa-star"></i>
        <i className="filled fas fa-star"></i>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et
        reiciendis voluptatum, amet est natus quaerat ducimus
      </p>
    </div>
  );
};

export default PersoneCard;
