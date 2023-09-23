import React from "react";
import Button from "./Button";
import privacyLogo from "../images/08 1.png";

const Privacy = () => {
  return (
    <div className="privacy-section">
      <div className="left-private">
        <div>
          <div>
            <h2>Privacy Policy and</h2>
            <h2>
              <span>Terms</span>
            </h2>
            <p style={{ marginBottom: "2rem", marginTop: "2rem" }}>
              Last update on September 12 2023
            </p>
            <p style={{ marginBottom: "2rem", marginTop: "2rem" }}>
              Below are our privacy & policy, which outline a lot of goodies.
              it’s our aim to always take of our participant
            </p>
          </div>
          <div className="privacy-box">
            <p>
              At getlinked tech Hackathon 1.0, we value your privacy and are
              committed to protecting your personal information. This Privacy
              Policy outlines how we collect, use, disclose, and safeguard your
              data when you participate in our tech hackathon event. By
              participating in our event, you consent to the practices described
              in this policy.
            </p>
            <h3>Licensing Policy</h3>
            <p>Here are terms of our Standard License:</p>
            <div>
              <div>
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="8.5" cy="8.5" r="8.5" fill="#2DE100" />
                  <path d="M5 8L7 10.5L13.5 6" stroke="white" strokeWidth="2" />
                </svg>
                <p style={{ display: "inline", marginLeft: "10px" }}>
                  The Standard License grants you a non-exclusive right to
                  navigate and register for our event
                </p>
              </div>
              <div>
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="8.5" cy="8.5" r="8.5" fill="#2DE100" />
                  <path d="M5 8L7 10.5L13.5 6" stroke="white" strokeWidth="2" />
                </svg>
                <p style={{ display: "inline", marginLeft: "10px" }}>
                  You are licensed to use the item available at any free source
                  sites, for your project developement
                </p>
              </div>
              <div>
                <Button value="Read More" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right-private">
        <svg
          width="500"
          height="618"
          viewBox="0 0 530 648"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M530 294.545C530 458.018 416.933 610.887 265 648C113.067 610.887 0 458.018 0 294.545V117.818L265 0L530 117.818V294.545ZM265 589.091C375.417 559.636 471.111 428.269 471.111 301.025V156.109L265 64.2109L58.8889 156.109V301.025C58.8889 428.269 154.583 559.636 265 589.091ZM347.444 294.545V250.364C347.444 209.127 306.222 176.727 265 176.727C223.778 176.727 182.556 209.127 182.556 250.364V294.545C164.889 294.545 147.222 312.218 147.222 329.891V432.982C147.222 453.6 164.889 471.273 182.556 471.273H344.5C365.111 471.273 382.778 453.6 382.778 435.927V332.836C382.778 312.218 365.111 294.545 347.444 294.545ZM309.167 294.545H220.833V250.364C220.833 226.8 241.444 212.073 265 212.073C288.556 212.073 309.167 226.8 309.167 250.364V294.545Z"
            fill="url(#paint0_linear_110_134)"
            fillOpacity="0.14"
          />
          <defs>
            <linearGradient
              id="paint0_linear_110_134"
              x1="265"
              y1="0"
              x2="265"
              y2="648"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#903AFF" />
              <stop offset="1" stopColor="#FF26B9" />
            </linearGradient>
          </defs>
        </svg>
        <img
          className="privacy-logo"
          src={privacyLogo}
          alt="privacy logo"
          width="400px"
        />
      </div>
    </div>
  );
};

export default Privacy;
