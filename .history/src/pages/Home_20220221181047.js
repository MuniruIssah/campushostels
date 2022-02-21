import React from "react";
import Header from "../components/Header";

const Home = () => {
  return (
    <div className="flex flex-col h-screen w-screen">
      <Header />
      <div className="flex h-full w-full">
        <div className="hidden md:block basis-1/4  h-full bg-teal-500">
          
        </div>
        <div className="flex-1 md:basis-3/4 h-full bg-blue-500"></div>
      </div>
    </div>
  );
};

export default Home;
