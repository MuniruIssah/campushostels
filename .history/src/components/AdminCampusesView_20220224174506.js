import React from "react";
import { useCampuses } from "../contexts/CampusContext";
import {AiOutlinePlus} from 'react-icons/ai'
import { FiEdit2 } from "react-icons/fi";
const AdminCampusesView = () => {
  const { campuses } = useCampuses();
  return (
    <div className="w-full h-full p-3 md:p-10 flex flex-col">
       <button className="p-2 md:p-3 text-white bg-indigo-700 rounded rounded-full shadow-md self-end">
        <AiOutlinePlus className="text-sm md:text-lg" />
      </button>
      <h1 className="md:text-3xl md:font-extrabold text-gray-800 py-3">
        Campuses
      </h1>
      <div className="h-[50vh] overflow-auto scroll smooth mt-10 ">
        {
          campuses.length===0?
          
        }
        <div className="flex flex-wrap">
          {campuses.map((campus, index) => (
            <CampusListItem key={index} {...campus} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminCampusesView;


const CampusListItem = ({ name }) => {
  return (
    <div className="group w-full md:w-auto p-3 my-2 bg-white rounded h-14 font-semibold text-gray-800 md:mr-5 relative  hover:bg-indigo-600 hover:text-white flex justify-center items-center">
      <div className="hidden group-hover:block absolute -top-2 right-1  bg-indigo-500 rounded rounded-full p-1 shadow-lg">
        <FiEdit2 className="text-xs " />
      </div>
      <span className="block">{name}</span>
    </div>
  );
};