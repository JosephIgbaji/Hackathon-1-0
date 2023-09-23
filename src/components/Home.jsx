import React from "react";
import Hero from "./Hero";
import BigIdea from "./BigIdea";
import RuleSection from "./RulesSection";
import bigIdeaImage from "../images/big-idea.png";
import ruleImage from "../images/7450159 1.png";
import JudgeSection from "./JudgeSection";
import FAQ from "./FAQ";
import TimeLine from "./TimeLine";
import Prizes from "./Prizes";
import Partners from "./Partners";
import Privacy from "./Privacy";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <BigIdea
        image={bigIdeaImage}
        whiteSubtitle="Introduction to getlinked tech"
        purpleSubtitle="Hackathon 1.0"
        details="Our tech hackathon is a melting pot of visionaries, and its purpose is as
    clear as day: to shape the future. Whether you're a coding genius, a 
    design maverick, or a concept wizard, you'll have the chance to transform 
    your ideas into reality. Solving real-world problems, pushing the boundaries
    of technology, and creating solutions that can change the world,
    that's what we're all about!"
      />
      <RuleSection
        image={ruleImage}
        whiteSubtitle="Rules and "
        purpleSubtitle="Guidlines"
        details="Our tech hackathon is a melting pot of visionaries, and its purpose is as
    clear as day: to shape the future. Whether you're a coding genius, a 
    design maverick, or a concept wizard, you'll have the chance to transform 
    your ideas into reality. Solving real-world problems, pushing the boundaries
    of technology, and creating solutions that can change the world,
    that's what we're all about!"
      />
      <JudgeSection />
      <FAQ />
      <TimeLine />
      <Prizes />
      <Partners />
      <Privacy />
      <Footer />
    </>
  );
};

export default Home;
