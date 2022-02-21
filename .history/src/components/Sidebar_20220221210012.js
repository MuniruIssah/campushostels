import React from "react";
import HashLoader from "react-spinners/HashLoader";
import HostelsProvider from "../contexts/HostelContext";
const Sidebar = () => {
  return (
    <div className="hidden md:block basis-1/4  h-full bg-slate-200 flex flex-col py-4 px-2">
      <h3 className="text-md font-semibold text-gray-800">
        Hostels around Campuses in Ghana
      </h3>
      <select
        className="form-select appearance-none w-full px-3 my-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        aria-label="Default select example"
      >
        <option selected>Open this select menu</option>
      </select>
      <HostelsProvider>
          
      </HostelsProvider>
    </div>
  );
};

export default Sidebar;



const HostelItem=({image,name,contact,description,gender,room_types,services})=>{
    return(
        <div className="h-52 flex shadow shadow-2xl bg-white">

        </div>
    )
}

