import React from "react";
import {AiOutlineTeam} from 'react-icons/ai'

const About = () => {
  return (
    <div className="bg-gray-900 w-full">
      <div className="flex flex-col items-center justify-center space-y-5 md:space-y-10 lg:p-20 p-6 w-full">
      <div className="flex justify-center items-center rounded rounded-full bg-indigo-700 px-4 py-2">
                <AiOutlineTeam className="text-white text-3xl"/>
          </div>
        <h1 className="tracking-tight  font-extrabold text-3xl text-white sm:text-4xl md:text-5xl">
          About 
        </h1>
        <div className="p-6 bg-gray-800 w-full shadow-md md:w-4/5 min-h-[15rem] flex justify-center items-center rounded rounded-lg">
          <p className="md:text-center text-gray-500 text-lg font-semibold md:w-4/5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            recusandae consectetur alias cum nihil doloribus unde sapiente a,
            aliquam reprehenderit laudantium nam earum ab autem itaque nulla.
            Sequi, consequuntur cumque.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
