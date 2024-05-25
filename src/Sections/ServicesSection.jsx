import React from "react";
import ServiceCard from "../Componants/ServiceCard";

const ServicesSection = () => {
  return (
    <div id="services" className="services section section-gray">
      <div className="container">
        <div className="special-heading">SERVICES</div>
        <div className="services-con">
          <ServiceCard
            ico="fas fa-user-shield fa-4x"
            title="Security"
            count="01"
          />
          <ServiceCard
            ico="fas fa-tools fa-4x"
            title="Fixing Issues"
            count="02"
          />
          <ServiceCard
            ico="fas fa-map-marked-alt fa-4x"
            title="Location"
            count="03"
          />
          <ServiceCard
            ico="fas fa-laptop-code fa-4x"
            title="Coding"
            count="04"
          />
          <ServiceCard ico="fas fa-palette fa-4x" title="Security" count="05" />
          <ServiceCard
            ico="fas fa-bullhorn fa-4x"
            title="Marketing"
            count="06"
          />
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
