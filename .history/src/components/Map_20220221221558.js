import React, { useState, useEffect } from "react";
import GoogleMapReact from "google-map-react";
import { useHostels } from "../contexts/HostelContext";
import { useMediaQuery } from "react-responsive";
import { IoLocationSharp } from "react-icons/io5";
const Map = () => {
  const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 });
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });
  const { hostels } = useHostels();
  //   getting your current location
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) =>
        setCoordinates({ lat: latitude, lng: longitude })
    );
  }, []);

  return (
    <div className="flex-1 md:basis-3/4 h-full bg-blue-500">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAOM8DbElNsj_sXsMQubMsYSlf4zoJaPq0" }}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={""}
        // onChange={(e) => {
        //   setCoordinates({ lat: e.center.lat, lng: e.center.lng });
        //   setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        // }}
        // onChildClick={(child)=>setChildClicked(child)}
      >
        {hostels?.map((place, i) => (
          <div
            className="absolute z-"
            lat={Number(place.location.latitude)}
            lng={Number(place.location.longitude)}
            key={i}
          >
            {isMobile ? (
              <IoLocationSharp className="text-blue-800" />
            ) : (
              <div className="shadow shadow-lg">
                <span className="">{place.name}</span>
                <img
                  className=""
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
