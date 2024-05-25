import React from "react";
import imgOne from "../imgs/gallery-01.png";
import imgTwo from "../imgs/gallery-02.png";
import imgThree from "../imgs/gallery-03.jpg";
import imgFour from "../imgs/gallery-04.png";
import imgFive from "../imgs/gallery-05.jpg";
import imgSix from "../imgs/gallery-06.png";
import GalleryImg from "../Componants/GalleryImg";

const GallerySection = () => {
  return (
    <div id="gallery" className="gallery section section-gray">
      <div className="container">
        <div className="special-heading">GALLERY</div>
        <div className="gallery-content">
          <GalleryImg src={imgOne} />
          <GalleryImg src={imgTwo} />
          <GalleryImg src={imgThree} />
          <GalleryImg src={imgFour} />
          <GalleryImg src={imgFive} />
          <GalleryImg src={imgSix} />
        </div>
      </div>
    </div>
  );
};

export default GallerySection;
