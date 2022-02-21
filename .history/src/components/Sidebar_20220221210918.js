import React from "react";
import { useHostels } from "../contexts/HostelContext";

const Sidebar = () => {
    const {hostels}=useHostels()
  return (
    <div className="hidden md:block basis-1/4  h-full bg-slate-200 flex flex-col py-4 px-2">
      <h3 className="flex-1 text-md font-semibold text-gray-800">
        Hostels around Campuses in Ghana
      </h3>
      <select
        className=" flex-1  form-select appearance-none w-full px-3 my-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        aria-label="Default select example"
      >
        <option selected>Open this select menu</option>
      </select>
      <div className="h-4/5 overflow-y-auto">
        {
            hostels.map((hostel,index)=><Hostel key/>)
        }
      </div>
    </div>
  );
};

export default Sidebar;

const HostelItem = ({
  image,
  name,
  contact,
  description,
  gender,
  room_types,
  services,
}) => {
  return <div className="h-52 flex shadow shadow-2xl bg-white"></div>;
};
