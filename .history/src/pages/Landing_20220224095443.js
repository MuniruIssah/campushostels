import React from "react";
import About from "../components/About";
import HeroSection from "../components/HeroSection";

const Landing = () => {
  return (
    <div className="scroll-smooth">
      <HeroSection />
      <About/>
    </ div>
  );
};

export default Landing;
