import React from "react";
import GoogleMapReact from "google-map-react";

const api_key = "AIzaSyDbM45cdgy6lhRpVPCOIFymIZN3ZR0CiYg";

const Map = (props) => {
  const defaultProps = {
    center: {
      lat: props.lat,
      lng: props.lng,
    },
    zoom: 15,
  };

  return (
    <Container>
      <GoogleMapReact
        bootstrapURLKeys={{ key: api_key }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        yesIWantToUseGoogleMapApiInternals
      >
        <LocationOnIcon lat={props.lat} lng={props.lng} />
      </GoogleMapReact>
    </Container>
  );
};

export default Map;
