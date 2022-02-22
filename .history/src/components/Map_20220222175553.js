import React, { useState, useEffect } from "react";
import GoogleMapReact from "google-map-react";
import { useHostels } from "../contexts/HostelContext";
import { useMediaQuery } from "react-responsive";
import { IoLocationSharp } from "react-icons/io5";
import { useCampuses } from "../contexts/CampusContext";
const Map = () => {
  const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 });
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });
  const { hostels } = useHostels();
  const { currentCampus } = useCampuses();

  // get current campus location
  useEffect(() => {
    if(currentCampus.name){
      const {location:{latitude:lat,longitude:lng}}=currentCampus
      setCoordinates({lat,lng})
    }
  }, [currentCampus]);
  

  return (
    <div className="flex-1 md:basis-3/4 h-full bg-blue-500">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAOM8DbElNsj_sXsMQubMsYSlf4zoJaPq0" }}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={(e) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
        //   setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
      >
        {hostels?.map((place, i) => (
          <div
            className="absolute z-[1] hover:z-[2] -translate-x-1/2 -translate-y-1/2 "
            lat={Number(place.location.latitude)}
            lng={Number(place.location.longitude)}
            key={i}
          >
            {isMobile ? (
              <IoLocationSharp className="text-4xl text-blue-800" />
            ) : (
              <div className="shadow shadow-lg w-24 h-auto bg-white p-2 rounded rounded-md bg-sky-400">
                <span className="text-sm mb-2 block text-gray-700 font-semibold">{place.name}</span>
                <img
                  className="w-full rounded rounded-lg"
                  src={place.images[1] ? place.images[1] : place.images[0]}
                  alt={place.name}
                />
                {/* <Rating size='small' value={Number(place.rating)} readOnly /> */}
              </div>
            )}
          </div>
        ))}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
