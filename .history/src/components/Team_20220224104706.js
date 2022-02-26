import React from "react";
import {AiOutlineTeam} from 'react-icons/ai'
const Team = () => {
 const members=[
     {
         profileImage:'',
         name:'Muniru Issah',
         role:'Software Engineer'
     },
     {
        profileImage:'',
        name:'Muniru Issah',
        role:'Software Engineer'
    }
 ]
  return (
    <div className="bg-gray-900 w-full">
      <div className="flex flex-col items-center justify-center space-y-5 md:space-y-10 lg:p-20 p-10 w-full">
          <div className="flex justify-center items-center rounded rounded-full bg-indigo-700 px-4 py-2">
                <AiOutlineTeam className="text-white text-3xl"/>
          </div>
        <h1 className="tracking-tight  font-extrabold text-3xl text-white sm:text-4xl md:text-5xl">
          Our Team
        </h1>
        <div className=" md:flex md:justify-center md:space-x-20 md:items-start w-full">
          <div class="group text-center mb-5 py-3 px-6 rounded rounder-lg hover:bg-gray-800">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp"
              class="rounded-full w-32 mb-4 mx-auto"
              alt="Avatar"
            />
            <h5 class="text-xl font-medium leading-tight mb-2 text-white">
              John Doe
            </h5>
            <p class="text-gray-500">Web designer</p>
          </div>
          <div class="group text-center py-3 px-6 rounded rounder-lg hover:bg-gray-800">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp"
              class="rounded-full w-32 mb-4 mx-auto"
              alt="Avatar"
            />
            <h5 class="text-xl font-medium leading-tight mb-2 text-white">
              John Doe
            </h5>
            <p class="text-gray-500">Web designer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
