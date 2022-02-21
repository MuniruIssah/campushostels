import React from "react";
import Header from "../components/Header";

const Home = () => {
  return (
    <div className="flex flex-col h-screen w-screen">
      <Header />
      <div className="flex h-full w-full">
        <div className="basis-1/3  h-full bg-teal-500">wwwww</div>
        <div className="basis-2/3 h-full bg-blue-500">44444444</div>
      </div>
    </div>
  );
};

export default Home;
