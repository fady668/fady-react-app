import React from "react";

const PlayerCard = (props) => {
  return (
    <div className="player">
      <div className="con">
        <img src={props.src} alt="Player Image" />
        <div className="links">
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-linkedin-in"></i>
          <i className="fab fa-youtube"></i>
        </div>
      </div>
      <h4>Name</h4>
      <p>Simple Short Description</p>
    </div>
  );
};

export default PlayerCard;
