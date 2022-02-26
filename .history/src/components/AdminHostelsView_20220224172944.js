import React from "react";
import { useHostels } from "../contexts/HostelContext";
import { AiOutlinePlus } from "react-icons/ai";
import {FiEdit2} from 'react-icons/fi'
const AdminHostelsView = () => {
  const { hostels } = useHostels();
  return (
    <div className="w-full h-full p-3 md:p-10 flex flex-col">
      <button className="p-2 md:p-3 text-white bg-indigo-700 rounded rounded-full shadow-md self-end">
        <AiOutlinePlus className="text-sm md:text-lg" />
      </button>
      <h1 className="text-xl font-bold md:text-3xl md:font-extrabold text-gray-800 py-3">
        Hostels
      </h1>
      <div className="h-[50vh] overflow-auto scroll smooth mt-10 ">
        <div className="flex flex-wrap">
          {hostels.map((hostel, index) => (
            <HostelListItem key={index} {...hostel} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminHostelsView;

const HostelListItem = ({ name, images }) => {
  return (
    <div className="group w-full md:w-auto mx-2 my-2 bg-white rounded py-4 px-4 font-semibold text-gray-800 mr-5 relative  hover:bg-indigo-600 hover:text-white flex space-x-3">
      <div className="hidden group-hover:block absolute -top-1 -right-1  bg-indigo-500 rounded rounded-full p-1 shadow-lg">
        <FiEdit2 className="text-xs "/>
      </div>
        <div className='w-12'>
          <img src={images[1]?images[1]:images[0]} alt="" />
        </div>
        <span>
        {name}

        </span>
    </div>
  );
};
