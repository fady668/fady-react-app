import React from "react";
import imgOne from "../imgs/team-01.jpg";
import imgTwo from "../imgs/team-02.jpg";
import imgThree from "../imgs/team-03.jpg";
import imgFour from "../imgs/team-04.jpg";
import imgFive from "../imgs/team-05.png";
import imgSix from "../imgs/team-06.png";
import imgSeven from "../imgs/team-07.jpg";
import imgEight from "../imgs/team-08.jpg";
import PlayerCard from "../Componants/PlayerCard";

const TeamSection = () => {
  return (
    <div id="team" className="team section">
      <div className="container">
        <div className="special-heading">TEAM MEMBERS</div>
        <div className="players-con">
          <PlayerCard src={imgOne} />
          <PlayerCard src={imgTwo} />
          <PlayerCard src={imgThree} />
          <PlayerCard src={imgFour} />
          <PlayerCard src={imgFive} />
          <PlayerCard src={imgSix} />
          <PlayerCard src={imgSeven} />
          <PlayerCard src={imgEight} />
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
