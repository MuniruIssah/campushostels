import React from "react";

const About = () => {
  return (
    <div className="bg-gray-900 flex flex-col items-center justify-center space-y-10 lg:p-20 p-6 w-screen">
      <h1 className="tracking-tight font-extrabold text-white sm:text-4xl md:text-5xl">
        About Campus Hostels
      </h1>
      <div className="p-6 bg-gray-800  shadow-md md:w-1/2 min-h-[10rem] flex justify-center items-center rounded rounded-lg">
        <p className="text-center text-gray-500 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          recusandae consectetur alias cum nihil doloribus unde sapiente a,
          aliquam reprehenderit laudantium nam earum ab autem itaque nulla.
          Sequi, consequuntur cumque.
        </p>
      </div>
    </div>
  );
};

export default About;
