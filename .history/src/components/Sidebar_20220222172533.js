import React from "react";
import CampusesProvider from "../contexts/CampusContext";
import { useHostels } from "../contexts/HostelContext";
import { useCampuses } from "../contexts/CampusContext";


const Sidebar = () => {
  const { hostels } = useHostels();
  return (
    <div className="hidden md:block basis-1/4 h-full flex flex-col py-4 px-6">
      <h3 className="text-md font-semibold text-gray-800">
        Hostels around Campuses in Ghana
      </h3>
      <CampusesProvider>
      <CampusesSelect/>

      </CampusesProvider>
      <div className="h-[75vh] overflow-y-auto  mt-3">
        {hostels.map((hostel, index) => (
          <HostelItem key={index} {...hostel} />
        ))}
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
    <div className="group h-auto min-h-72 flex flex-col shadow shadow-md hover:shadow-xl bg-white my-4 rounded rounded-lg mx-2">
      <img
        src={images[1] ? images[1] : images[0]}
        alt=""
        className="w-full h-40 object-cover   rounded-tr-lg  rounded-tl-lg"
      />
      <div className="flex flex-col p-2">
        <h2 className="text-xl text-gray-600 my-2 font-semibold">{name}</h2>
        <h2 className="text-md text-gray-600 mb-2">{description}</h2>
        {services.length > 1 && (
          <div className="flex flex-wrap">
            {services.map((service, index) => (
              <Service service={service} key={index} />
            ))}
          </div>
        )}
        {contact && (
          <button className="bg-blue-600 py-2 text-md text-white hover:font-semibold hover:bg-blue-900 w-auto my-3 rounded rounded-lg">
            Call Hostel
          </button>
        )}
      </div>
    </div>
  );
};

const Service = ({ service }) => {
  return (
    <div className="px-2 py-1 text-xs bg-gray-300 hover:font-semibold text-gray-600 inline mr-2  my-1 rounded rounded-lg hover:bg-gray-400">
      {service}
    </div>
  );
};

const CampusesSelect = () => {
  const {campuses} =useCampuses()
  return (
    <select
      className="form-select appearance-none w-full px-3 my-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
      aria-label="Default select example"
    >
      <option selected>Select A campus</option>
      {
        campuses.map((campus,index)=> <option selected>Select A campus</option>)
      }
    </select>
  );
};
