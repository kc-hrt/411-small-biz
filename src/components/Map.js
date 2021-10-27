import React from "react";
import GoogleMapReact from "google-map-react";

const apiKey = process.env.api_key;
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
        bootstrapURLKeys={{ key: apiKey }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent lat={props.lat} lng={props.lng} />
      </GoogleMapReact>
    </Container>
  );
};

export default Map;
