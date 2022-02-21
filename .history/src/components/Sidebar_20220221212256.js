import React from "react";
import { useHostels } from "../contexts/HostelContext";

const Sidebar = () => {
  const { hostels } = useHostels();
  return (
    <div className="hidden md:block basis-1/4 h-screen  flex flex-col py-4 px-2">
      <h3 className="text-md font-semibold text-gray-800">
        Hostels around Campuses in Ghana
      </h3>
      <select
        className="form-select appearance-none w-full px-3 my-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        aria-label="Default select example"
      >
        <option selected>Open this select menu</option>
      </select>
      <div className="flex-1">
        <div className="h-full overflow-y-auto">
          {hostels.map((hostel, index) => (
            <HostelItem key={index} {...hostel} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

const HostelItem = ({
  images,
  name,
  contact,
  description,
  location,
  gender,
  room_types,
  services,
}) => {
  return (
    <div className="group h-72 flex shadow shadow-md hover:shadow-xl bg-white my-3 rounded rounded-lg mx-4 ">
      <img
        src={images[1] ? images[1] : images[0]}
        alt=""
        className="w-full h-36 object-cover   rounded-tr-lg  rounded-tl-lg"
      />
    </div>
  );
};
