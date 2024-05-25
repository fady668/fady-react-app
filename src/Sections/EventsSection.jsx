import React from "react";
import img from "../imgs/events.png";
import TimeSpan from "../Componants/TimeSpan";
import cornerImg from "../imgs/dots.png";

const EventsSection = () => {
  return (
    <div className="events section" id="events">
      <img className="corner-img left" src={cornerImg} alt="Dots Image" />
      <img className="corner-img right" src={cornerImg} alt="Dots Image" />
      <div className="container">
        <div className="special-heading">LATEST EVENTS</div>
        <div className="events-con">
          <img src={img} alt="Events Image" />
          <div className="right-part">
            <div className="time">
              <TimeSpan time="461" title="Days" />
              <TimeSpan time="2" title="Hours" />
              <TimeSpan time="32" title="Minutes" />
              <TimeSpan time="17" title="Seconds" />
            </div>
            <h3>Tech Masters Event 2024</h3>
            <p className="event-p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et vero
              tenetur doloremque iusto ut adipisci quam ratione aliquam
              excepturi nulla in harum, veritatis porro
            </p>
          </div>
        </div>
        <form action="#">
          <input type="email" placeholder="Enter Your Email" />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </div>
  );
};

export default EventsSection;
