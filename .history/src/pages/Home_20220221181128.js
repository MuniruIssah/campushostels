import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <div className="flex flex-col h-screen w-screen">
      <Header />
      <div className="flex h-full w-full">
        <Sidebar>
        <div className="flex-1 md:basis-3/4 h-full bg-blue-500"></div>
      </div>
    </div>
  );
};

export default Home;
