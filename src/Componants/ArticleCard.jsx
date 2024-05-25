import React from "react";

const ArticleCard = (props) => {
  return (
    <div className="card">
      <img src={props.img} alt="" className="card-img" />
      <h3>Test Title</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit
      </p>
      <div className="card-footer">
        <p>Read More</p>
        <i className="fas fa-long-arrow-alt-right"></i>
      </div>
    </div>
  );
};

export default ArticleCard;
