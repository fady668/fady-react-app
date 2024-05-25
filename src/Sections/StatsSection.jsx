import React from "react";
import StateCard from "../Componants/StateCard";

const StatsSection = () => {
  return (
    <div className="stats section section-gray" id="stats">
      <div className="container">
        <div className="special-heading">Our Awesome Stats</div>
        <div className="cards">
          <StateCard
            icon="far fa-user fa-2x fa-fw"
            number="150"
            title="Clients"
          />
          <StateCard
            icon="fas fa-code fa-2x fa-fw"
            number="135"
            title="Projects"
          />
          <StateCard
            icon="fas fa-globe-asia fa-2x fa-fw"
            number="50"
            title="Countries"
          />
          <StateCard
            icon="far fa-money-bill-alt fa-2x fa-fw"
            number="500"
            title="Money"
          />
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
