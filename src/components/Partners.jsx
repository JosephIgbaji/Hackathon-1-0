import React from "react";
import libAss from "../images/liberty-assured.png";
import libPay from "../images/liberty-pay.png";
import winwise from "../images/winwise.png";
import wisper from "../images/whisper.png";

const Partners = () => {
  return (
    <div className="partners">
      <div className="partners-header-section">
        <h2>Partners and Sponsors</h2>
        <p>
          Getlinked Hackathon 1.0 is honored to have the following major
          companies as its partners and sponsors
        </p>
      </div>
      <div className="logo-section">
        <div className="liberty-assured-logo">
          <img src={libAss} alt="partner logo" />
        </div>
        <div className="liberty-pay-logo">
          <img src={libPay} alt="partner logo" />
        </div>
        <div className="winwise-logo">
          <img src={winwise} alt="partner logo" />
        </div>
        <div className="whispersms">
          <img src={wisper} alt="partner logo" />
        </div>
        <div className="paybox-logo">
          pay<span className="blue-color">box</span>
        </div>
        <div className="vusual-logo">
          Vusual <span>Plus</span>
          <p className="ps-abs">Design Studios</p>
        </div>
        <div className="circle1"></div>
        <div className="circle2"></div>
      </div>
      <div className="partners-floating-line"></div>
    </div>
  );
};

export default Partners;
