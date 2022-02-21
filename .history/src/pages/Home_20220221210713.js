import React from "react";
import Header from "../components/Header";
import Map from "../components/Map";
import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <div className="flex flex-col h-screen w-screen">
      <Header />
      <div className="flex h-full w-full">
      <HostelsProvider>
            
            </HostelsProvider>
       
      </div>
    </div>
  );
};

export default Home;
