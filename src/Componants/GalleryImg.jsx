import React from "react";

const GalleryImg = (props) => {
  return (
    <div className="gall-img">
      <img src={props.src} alt="Gallery Image" />
    </div>
  );
};

export default GalleryImg;
