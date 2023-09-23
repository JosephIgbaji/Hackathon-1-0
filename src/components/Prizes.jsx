import React from "react";
import prizeImage from "../images/9486889 1.png";
import silverImage from "../images/silver-medal.png";
import goldImage from "../images/gold-medal.png";
import bronzeImage from "../images/bronze-medal.png";

const Prizes = () => {
  return (
    <div className="title-section">
      <div className="prize-upper-div">
        <h2>Prizes and</h2>
        <h2>
          <span>Rewards</span>
        </h2>
        <p style={{ marginBottom: "2rem", marginTop: "2rem" }}>
          Highlight of the prizes or rewards for winners and for participants
        </p>
      </div>
      <div className="prize-lower-div">
        <div className="image-container">
          <img
            className="prize-image-lg"
            src={prizeImage}
            alt="prize logo"
            width="500px"
          />
          <img
            className="prize-image-sm"
            src={prizeImage}
            alt="prize logo"
            width="350px"
          />
        </div>
        <div className="levels-section">
          <div className="silver">
            <img src={silverImage} alt="silver medal" width="150px" />
            <h2>2nd</h2>
            <h3>Runner</h3>
            <h2 className="prize-amount">300,000</h2>
          </div>
          <div className="gold">
            <img src={goldImage} alt="gold medal" width="250px" />
            <h2>1st</h2>
            <h3>Runner</h3>
            <h2 className="prize-amount">400,000</h2>
          </div>
          <div className="bronze">
            <img src={bronzeImage} alt="bronze medal" width="150px" />
            <h2>3rd</h2>
            <h3>Runner</h3>
            <h2 className="prize-amount">150,000</h2>
          </div>
        </div>
      </div>
      <div className="prize-floating-line"></div>
    </div>
  );
};

export default Prizes;
