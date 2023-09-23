import React from "react";

const BigIdea = ({ image, whiteSubtitle, purpleSubtitle, details }) => {
  return (
    <div className="idea-template">
      <div className="idea-image">
        <img src={image} alt="idea-lamp" width="400px" />
      </div>
      <div>
        <h2>{whiteSubtitle}</h2>
        <h2>
          <span>{purpleSubtitle}</span>
        </h2>
        <p>{details}</p>
      </div>
      <div className="idea-floating-line"></div>
    </div>
  );
};

export default BigIdea;
