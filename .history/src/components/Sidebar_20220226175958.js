import React, { useState } from "react";
import { useHostels } from "../contexts/HostelContext";
import { useCampuses } from "../contexts/CampusContext";
import HostelModal from "./Modal";

const Sidebar = () => {
  const { hostels } = useHostels();
  return (
    <div className="hidden md:block basis-1/4 h-full flex flex-col py-4 px-6">
      <h3 className="text-md font-semibold text-gray-800">
        Hostels around Campuses in Ghana
      </h3>
      <CampusesSelect />
      <div className="h-[75vh] overflow-y-auto  mt-3">
        {hostels.map((hostel, index) => (
          <HostelItem key={index} hostel={hostel} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;

const HostelItem = ({ hostel }) => {
  const {
    images,
    name,
    contact,
    description,
    location,
    gender,
    room_types,
    services,
  } = hostel;
  const [visible, setVisible] = useState(false);
  const showModal = () => setVisible(true);
  return (
    <>
      <div
        onClick={showModal}
        className="group h-auto min-h-72 flex flex-col shadow shadow-md hover:shadow-xl bg-white my-4 rounded rounded-lg mx-2"
      >
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
      <HostelModal
        visible={visible}
        onClose={() => setVisible(false)}
        title={name}
      >
        <HostelModalContent {...hostel} />
      </HostelModal>
    </>
  );
};

// content of the hostel modal

const HostelModalContent = ({
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
    <div className="flex flex-col p-6 ">
      <button className="text-blue-500 bg-blue-100  px-4  md:self-start py-2 rounded rounded-md hover:shadow-md hover:bg-blue-600 hover:font-semibold hover:text-white">
        {contact}
      </button>
      <div className="">
        {
          images.map((image)=>(
            <div>
              img
            </div>
          ))
        }
      </div>
      {services?.length > 1 && (
        <div className="flex flex-wrap my-3">
          {services.map((service, index) => (
            <Service service={service} key={index} />
          ))}
        </div>
      )}
      <span className="">{description}</span>
      <div>
        <span className="">
          {location.latitude},{location.longitude}
        </span>
      </div>
      <span className="">{gender}</span>
      {room_types.length > 0 && (
        <div className="">
          {room_types.map((room_type) => `${room_type} in a room `)}
        </div>
      )}
    </div>
  );
};

// service tag component
const Service = ({ service }) => {
  return (
    <div className="px-2 py-1 text-xs bg-gray-300 hover:font-semibold text-gray-600 inline mr-2  my-1 rounded rounded-lg hover:bg-gray-400">
      {service}
    </div>
  );
};

// campuses select component

const CampusesSelect = () => {
  const { currentCampus, campuses, changeCampus } = useCampuses();
  return (
    <>
      {campuses.length === 0 ? (
        "Loading campuses"
      ) : (
        <select
          className="form-select appearance-none w-full px-3 my-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          aria-label="Default select example"
          value={currentCampus.name}
          onChange={({ target: { value } }) => changeCampus(value)}
        >
          <option selected>Select A campus</option>
          {campuses.map(({ name }, index) => (
            <option key={index} value={name}>
              {name}
            </option>
          ))}
        </select>
      )}
    </>
  );
};
