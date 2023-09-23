import React from "react";
import image from "../images/8046554 1.png";
import purpleImage from "../images/purple-bg.png";
import Button from "./Button";

const JudgeSection = () => {
  return (
    <div className="judging-template">
      <div>
        <img
          className="judging-image"
          src={image}
          alt="idea-lamp"
          width="500px"
        />
      </div>
      <div className="judging-right-section">
        <h2>JudgingCriteria</h2>
        <h2>
          <span>Key attributes</span>
        </h2>
        <div style={{ marginBottom: "4rem" }}>
          <MiniSection
            title="Innovation and Creativity: "
            details="Evaluate the uniqueness and creativity of the
          solution. Consider whether it addresses a real-world problem in a novel 
          way or introduces innovative features."
          />
          <MiniSection
            title="Functionality: "
            details="Assess how well the solution works. Does it perform its 
          intended functions effectively and without major issues? Judges would
          consider the completeness and robustness of the solution."
          />
          <MiniSection
            title="Impact and Relevance: "
            details="Determine the potential impact of the solution 
          in the real world. Does it address a significant problem, and is it relevant 
          to the target audience? Judges would assess the potential social, 
          economic, or environmental benefits."
          />
          <MiniSection
            title="Technical Complexity: "
            details="Evaluate the technical sophistication of the solution. 
          Judges would consider the complexity of the code, the use of advanced 
          technologies or algorithms, and the scalability of the solution."
          />
          <MiniSection
            title="Adherence to Hackathon Rules: "
            details="Judges will Ensure that the team adhered 
          to the rules and guidelines of the hackathon, including deadlines, use of 
          specific technologies or APIs, and any other competition-specific requirements."
          />
        </div>
        <Button value="Read More" />
        <img
          className="judge-background-1"
          src={purpleImage}
          alt="left section background"
          width=""
        />
        <img
          className="judge-background-2"
          src={purpleImage}
          alt="left section background"
          width=""
        />
        <svg
          className="round-background"
          width="134"
          height="134"
          viewBox="0 0 134 134"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="67" cy="67" r="67" fill="url(#paint0_linear_70_6)" />
          <defs>
            <linearGradient
              id="paint0_linear_70_6"
              x1="134"
              y1="67"
              x2="3.69183"
              y2="67"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#8F01FE" />
              <stop offset="1" stopColor="#FF2674" />
            </linearGradient>
          </defs>
        </svg>
        {/* <div className="round-background"></div> */}
      </div>
      <div className="judge-floating-line"></div>
    </div>
  );
};

export default JudgeSection;

function MiniSection({ title, details }) {
  const stylepink = {
    color: "#FF26B9",
    fontFamily: "Montserrat",
    fontSize: "1rem",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "173.5%" /* 1.735rem */,
  };

  const stylewhite = {
    color: "#FFF",
    fontFamily: "Montserrat",
    fontSize: "0.875rem",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "173.5%",
    marginTop: "15px",
  };
  return (
    <p style={stylewhite}>
      <span style={stylepink}>{title}</span>
      {details}
    </p>
  );
}
