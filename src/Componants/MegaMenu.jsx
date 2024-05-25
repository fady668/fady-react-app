import React from "react";
import megaMenuImg from "../imgs/megamenu.png";

const MegaMenu = () => {
  return (
    <div className="mega-menu">
      <img src={megaMenuImg} alt="Mega Menu Photo" />
      <ul className="links">
        <li>
          <a href="#testimonials">
            <i className="far fa-comments fa-fw"></i> Testimonials
          </a>
        </li>
        <li>
          <a href="#team">
            <i className="far fa-user fa-fw"></i> Team Members
          </a>
        </li>
        <li>
          <a href="#services">
            <i className="far fa-building fa-fw"></i> Services
          </a>
        </li>
        <li>
          <a href="#our-skills">
            <i className="far fa-check-circle fa-fw"></i> Our Skills
          </a>
        </li>
        <li>
          <a href="#work-steps">
            <i className="far fa-clipboard fa-fw"></i> How It Works
          </a>
        </li>
      </ul>
      <ul className="links">
        <li>
          <a href="#events">
            <i className="far fa-calendar-alt fa-fw"></i> Events
          </a>
        </li>
        <li>
          <a href="#pricing">
            <i className="fas fa-server fa-fw"></i> Pricing Plans
          </a>
        </li>
        <li>
          <a href="#video">
            <i className="far fa-play-circle fa-fw"></i> Top Videos
          </a>
        </li>
        <li>
          <a href="#stats">
            <i className="far fa-chart-bar fa-fw"></i> Stats
          </a>
        </li>
        <li>
          <a href="#discount">
            <i className="fas fa-percent fa-fw"></i> Request A Discount
          </a>
        </li>
      </ul>
    </div>
  );
};

export default MegaMenu;
