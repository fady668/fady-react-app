import React from "react";
import img from "../imgs/discount.png";

const DiscountSection = () => {
  return (
    <div id="discount" className="discount section">
      <div className="left">
        <h3>We Have A Discount</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi
          asperiores consectetur, recusandae ratione provident necessitatibus,
          cumque delectus commodi fuga praesentium beatae. Totam vel similique
          laborum dicta aperiam odit doloribus corporis.
        </p>
        <img src={img} alt="Discount Image" />
      </div>
      <div className="right">
        <h3>Request A Discount</h3>
        <form action="#">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <input type="text" placeholder="Your Number Phone" />
          <textarea type="text" placeholder="Tell Us About Your Needs"></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default DiscountSection;
