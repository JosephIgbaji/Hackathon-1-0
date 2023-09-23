import React, { useState } from "react";
import Button from "./Button";
import man from "../images/man-wearing-glass.png";
import globe from "../images/globe.png";
import web from "../images/spider-web.png";
import purpleImage from "../images/purple-bg.png";
import { Link } from "react-router-dom";

const Hero = () => {
  let time = new Date().toLocaleTimeString();
  const [currentTime, setCurrentTime] = useState(time);

  const updateTime = () => {
    let time = new Date().toLocaleTimeString();
    setCurrentTime(time);
  };

  setInterval(updateTime, 1000);
  return (
    <div className="hero-section">
      <div className="hero-quote">
        Igniting a Revolution in HR Innovation
        <svg
          width="255"
          height="17"
          viewBox="0 0 255 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 14.043C43.3333 5.7097 154.4 -5.95697 254 14.043"
            stroke="#FF26B9"
            strokeWidth="5"
          />
        </svg>
      </div>
      <div className="left-section-grid">
        <section className="left-section">
          <img
            className="left-section-background"
            src={purpleImage}
            alt="left section background"
            width="100%"
          />
          <h2>getLinkedTech</h2>
          <h2>
            Hackathon<span>1.0</span>
          </h2>
          <p>
            Participate in getlinked tech Hackathon 2023 stand a chance to win a
            Big prize
          </p>
          <Link to="/register">
            <Button value="Register" />
          </Link>
          <div className="timer-placeholder">{currentTime}</div>
        </section>
        <section className="right-section">
          <img
            className="man-image"
            src={man}
            alt="man wearing lens"
            width="600px"
          />
          <img
            className="right-section-overlay"
            src={globe}
            alt="a globe diagram"
            width="400px"
          />
          <img
            className="right-section-overlay-2"
            src={web}
            alt="second overlay"
            width="400px"
            height=""
          />
          <img
            className="right-section-background"
            src={purpleImage}
            alt=""
            width="400px"
          />
        </section>
      </div>
      <div className="hero-floating-line"></div>
    </div>
  );
};

export default Hero;
