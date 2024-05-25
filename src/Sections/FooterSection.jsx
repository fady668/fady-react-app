import React from "react";
import imgOne from "../imgs/gallery-01.png";
import imgTwo from "../imgs/gallery-02.png";
import imgThree from "../imgs/gallery-03.jpg";
import imgFour from "../imgs/gallery-04.png";
import imgFive from "../imgs/gallery-05.jpg";
import imgSix from "../imgs/gallery-06.png";
import GalleryImg from "../Componants/GalleryImg";

const FooterSection = () => {
  return (
    <div className="footer section">
      <div className="container">
        <div>
          <h2>Fady</h2>
          <div className="links">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-youtube"></i>
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus
            nulla rem, dignissimos iste aspernatur
          </p>
        </div>
        <div>
          <ul>
            <li>
              <i className="fa-solid fa-angles-right"></i>
              <p>Important Link 1</p>
            </li>
            <li>
              <i className="fa-solid fa-angles-right"></i>
              <p>Important Link 2</p>
            </li>
            <li>
              <i className="fa-solid fa-angles-right"></i>
              <p>Important Link 3</p>
            </li>
            <li>
              <i className="fa-solid fa-angles-right"></i>
              <p>Important Link 4</p>
            </li>
            <li>
              <i className="fa-solid fa-angles-right"></i>
              <p>Important Link 5</p>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <i className="fas fa-map-marker-alt fa-fw"></i>
              <p>Egypt, Giza, Inside The Sphinx, Room Number 220</p>
            </li>
            <li>
              <i className="far fa-clock fa-fw"></i>
              <p>Egypt, Giza, Inside The Sphinx, Room Number 220</p>
            </li>
            <li>
              <i className="fas fa-phone-volume fa-fw"></i>
              <div className="nums-phone">
                <p>+201018926789</p>
                <p>+201272758589</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="imgs">
          <img src={imgOne} alt="Gallery Image" />
          <img src={imgTwo} alt="Gallery Image" />
          <img src={imgThree} alt="Gallery Image" />
          <img src={imgFour} alt="Gallery Image" />
          <img src={imgFive} alt="Gallery Image" />
          <img src={imgSix} alt="Gallery Image" />
        </div>
      </div>
      <span>
        Made By Fady <i class="fa-solid fa-face-smile-wink"></i>{" "}
      </span>
    </div>
  );
};

export default FooterSection;
