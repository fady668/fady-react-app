import React from "react";
import imgOne from "../imgs/video-preview.jpg";

const VideosSection = () => {
  return (
    <div className="videos section" id="video">
      <div className="container">
        <div className="special-heading">TOP VIDEOS</div>
        <div className="content">
          <div className="videos-menu">
            <ul>
              <li>
                <h3>Top Videos</h3>
                <i className="fas fa-random"></i>
              </li>
              <li>
                <p className="name">How To Create Sub Domain</p>
                <p className="v-time">05:18</p>
              </li>
              <li>
                <p className="name">Playing With The DNS</p>
                <p className="v-time">03:18</p>
              </li>
              <li>
                <p className="name">Playing With The DNS</p>
                <p className="v-time">05:25</p>
              </li>
              <li>
                <p className="name">How To Monitor Your Website</p>
                <p className="v-time">04:16</p>
              </li>
              <li>
                <p className="name">Uncharted Beating The Last Boss</p>
                <p className="v-time">07:48</p>
              </li>
              <li>
                <p className="name">Ys Oath In Felghana Overview</p>
                <p className="v-time">03:12</p>
              </li>
              <li>
                <p className="name">Ys Series All Games Ending</p>
                <p className="v-time">08:10</p>
              </li>
            </ul>
          </div>
          <div className="display-vid">
            <img src={imgOne} alt="Video Preview" />
            <p>Everything About The Virtual Hosts</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideosSection;
