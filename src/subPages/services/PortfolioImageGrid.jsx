import React, { Fragment } from "react";
import "./services.scss";
import PortfolioImageData from "./portfolio.json";

const PortfolioImageGrid = () => {
  const images = PortfolioImageData.data.map((image) => (
    <div key={image.id} className="imageContainer">
      <img
        src={image.desktop}
        alt={image.title}
        title={image.title}
        className="imageStyle"
      />
      <a
        href={image.url}
        target="_blank"
        rel="noreferrer noopener"
        className="portfolioLinkStyle"
      >
        {image.title}
      </a>
    </div>
  ));

  return <Fragment>{images}</Fragment>;
};

export default PortfolioImageGrid;
