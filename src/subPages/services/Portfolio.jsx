import React from "react";
import PortfolioImageGrid from "./PortfolioImageGrid";
import "./services.scss";
import { Link } from "react-router-dom";

const Portfolio = () => {
  return (
    <div className="portfolioContainer">
      <div style={{fontFamily: "'Oswald', sans-serif"}}>
        <p>
          Corregidor Tech is your partner for designing, deploying, and
          maintaining secure, beautiful bespoke web sites and applications.
        </p>
        <p>
          A Corregidor Tech professional will walk you through the process of
          software development from project ideation, user studies, design,
          requirements gathering, and ultimately through project implementation
          and delivery, customizing the process to you or your organization’s
          specific needs.
        </p>
        <p>
          At Corregidor Tech, we believe in true Agile processes. Our goal is to
          handle the technical concerns, empowering stakeholders to provide
          consistent feedback focused on the look, feel, and usability of the
          product to ensure that it best matches your business
          processes and use-cases.
        </p>
        <p>Please <Link to="/contact" className="linkStyle">contact Corregidor Tech</Link> to begin your next dream project!</p>
      </div>
        <div className="imageGridContainer">
            <PortfolioImageGrid />
        </div>
    </div>
  );
};

export default Portfolio;
