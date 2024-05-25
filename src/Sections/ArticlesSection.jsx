import React from "react";
import ArticleCard from "../Componants/ArticleCard";
import imgOne from "../imgs/cat-01.jpg";
import imgTwo from "../imgs/cat-02.jpg";
import imgThree from "../imgs/cat-03.jpg";
import imgFour from "../imgs/cat-04.jpg";
import imgFive from "../imgs/cat-05.jpg";
import imgSix from "../imgs/cat-06.jpg";
import imgSeven from "../imgs/cat-07.jpg";
import imgEight from "../imgs/cat-08.jpg";

const ArticlesSection = () => {
  return (
    <div id="articles" className="section">
      <div className="container">
        <div className="special-heading">ARTICLES</div>
        <div className="article-cards">
          <ArticleCard img={imgOne} />
          <ArticleCard img={imgTwo} />
          <ArticleCard img={imgThree} />
          <ArticleCard img={imgFour} />
          <ArticleCard img={imgFive} />
          <ArticleCard img={imgSix} />
          <ArticleCard img={imgSeven} />
          <ArticleCard img={imgEight} />
        </div>
      </div>
    </div>
  );
};

export default ArticlesSection;
