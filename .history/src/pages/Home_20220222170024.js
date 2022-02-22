import React from "react";
import Header from "../components/Header";
import Map from "../components/Map";
import Sidebar from "../components/Sidebar";
import HostelsProvider from "../contexts/HostelContext";

const Home = () => {
  return (
    <div className="flex flex-col h-screen w-screen">
      <HostelsProvider>
        <Header />
        <div className="flex h-full w-full">
          <Sidebar />
          <Map />
        </div>
      </HostelsProvider>
    </div>
  );
};

export default Home;
