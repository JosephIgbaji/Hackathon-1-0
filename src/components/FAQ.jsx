import React from "react";
import faq from "../images/faq.png";

const FAQ = () => {
  return (
    <div className="faq-template">
      <div className="faq-left-section">
        <h2>Frequently Ask</h2>
        <h2>
          <span>Question</span>
        </h2>
        <p style={{ marginBottom: "2rem", marginTop: "2rem" }}>
          We got answers to the questions that you might want to ask about
          getlinked Hackathon 1.0
        </p>
        <Questions question="Can i work on a project i started before the hackathon?" />
        <Questions question="What happens if I need help during the hackathon?" />
        <Questions question="What happens if I don't have an idea for a project?" />
        <Questions question="Can I join a team or do I have to come with one?" />
        <Questions question="What happens after the hackathon ends" />
        <Questions question="Can I work on a project I started before the hackathon?" />
        <div></div>
      </div>
      <div>
        <img className="faq-image" src={faq} alt="faq-lamp" width="700px" />
        <img
          className="faq-image-sm"
          src={faq}
          alt="faq-lamp-sm"
          width="400px"
        />
      </div>
      <div className="faq-floating-line"></div>
    </div>
  );
};

export default FAQ;

function Questions({ question }) {
  return (
    <div className="questions">
      <p>{question}</p>
      <p style={{ color: "#D434FE" }}>+</p>
    </div>
  );
}
