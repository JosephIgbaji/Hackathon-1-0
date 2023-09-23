import React from "react";
import purpleImage from "../images/purple-bg.png";

const RuleSection = ({ image, whiteSubtitle, purpleSubtitle, details }) => {
  return (
    <div className="rule-template">
      <div className="left-side">
        <h2>{whiteSubtitle}</h2>
        <h2>
          <span>{purpleSubtitle}</span>
        </h2>
        <p>{details}</p>
      </div>
      <div className="rule-image">
        <img src={image} alt="idea-lamp" width="400px" />
      </div>
      <img
        className="rules-background-1"
        src={purpleImage}
        alt="left section background"
        width=""
      />
      <img
        className="rules-background-2"
        src={purpleImage}
        alt="left section background"
        width=""
      />
      <div className="rules-floating-line"></div>
    </div>
  );
};

export default RuleSection;
