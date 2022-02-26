import React from "react";
import About from "../components/About";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Team from "../components/Team";

const Landing = () => {
  return (
    <div className="scroll-smooth  w-screen">
      <HeroSection />
      <About />
      <Team />
      <Footer/>
    </div>
  );
};

export default Landing;
