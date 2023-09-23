import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import manSuccessImage from "../images/successman.png";
import successDoneImage from "../images/successdone.png";

const RegSuccess = ({ handleSuccess }) => {
  return (
    <div className="reg-bg">
      <div className="reg-success d-flex-c">
        <div className="success-images">
          <img
            className="icon-success"
            src={successDoneImage}
            alt="successful registration"
            width="300px"
          />
          <img
            className="man-success"
            src={manSuccessImage}
            alt="successful registration"
            width="300px"
          />
        </div>
        <div className="success-message d-flex-c">
          <h2 className="mb-1">Congratulations</h2>
          <h2 className="mb-1">you have successfully Registered!</h2>
          <p>Yes, it was easy and you did it</p>
          <p className="mb-2">check you mail box for next step</p>
          <button onClick={handleSuccess} className="button-component">
            Back
          </button>
          ;
        </div>
      </div>
    </div>
  );
};

export default RegSuccess;
