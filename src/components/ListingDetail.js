import React from "react";
import { Container } from "@material-ui/core";
import GoogleMapReact from "google-map-react";
const api_key = "AIzaSyDbM45cdgy6lhRpVPCOIFymIZN3ZR0CiYg";
const AnyReactComponent = ({ text }) => <div>{text}</div>;

const ListingDetail = (props) => {
  const id = props.match.params.id;
  const listings = props.listings.find((c) => c.id == id);
  console.log("🍟", id, listings);
  const defaultProps = {
    center: {
      lat: Number(listings.Latitude),
      lng: Number(listings.Longitude),
    },
    zoom: 15,
  };

  // console.log("🍕", defaultProps);

  return (
    <Container>
      <h2>{listings["businessName"]}</h2>
      <p>{listings["businessDescription"]}</p>
      <p>{listings["businessHours"]}</p>
      <p>{listings["businessAddress"]}</p>
      <div style={{ height: "50vh", width: "75%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: api_key }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent
            lat={listings.Latitude}
            lng={listings.Longitude}
            text={listings.businessName}
          />
        </GoogleMapReact>
      </div>
    </Container>
  );
};

export default ListingDetail;
