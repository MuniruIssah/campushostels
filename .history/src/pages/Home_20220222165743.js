import React from "react";
import Header from "../components/Header";
import Map from "../components/Map";
import Sidebar from "../components/Sidebar";
import HostelsProvider from "../contexts/HostelContext";

const Home = () => {
  return (
    <HostelsProvider>
    <div className="flex flex-col h-screen w-screen">
      <Header />
      <div className="flex h-full w-full">

          <Sidebar />
          <Map />
        </HostelsProvider>
      </div>
    </div>
  );
};

export default Home;
