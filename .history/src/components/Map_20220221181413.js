import React from 'react'
import GoogleMapReact from "google-map-react";
const Map = () => {
  return (
    <div className="flex-1 md:basis-3/4 h-full bg-blue-500">
        <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAOM8DbElNsj_sXsMQubMsYSlf4zoJaPq0" }}
        defaultCenter={lati}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={(e) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        // onChildClick={(child)=>setChildClicked(child)}
      >
        {/* {places?.map((place,i) => (
          <div
            className={classes.markerContainer}
            lat={Number(place.latitude)}
            lng={Number(place.longitude)}
            key={i}
          >
            {isMobile ? (
              <LocationOnOutlinedIcon color="primary" fontSize="large" />
            ) : (
              <Paper elevation={3} className={classes.paper}>
                <Typography
                  className={classes.typography}
                  variant="subtitle2"
                  gutterBottom
                >
                  {place.name}
                </Typography>
                <img
                  className={classes.pointer}
                  src={
                    place.photo
                      ? place.photo.images.large.url
                      : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
                  }
                  alt={place.name}
                />
                <Rating size='small' value={Number(place.rating)} readOnly />
              </Paper>
            )}
          </div>
        ))} */}
      </GoogleMapReact>

    </div>
  )
}

export default Map