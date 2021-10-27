import React from "react";
import { Link } from "react-router-dom";
import cookie from "cookie";

import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

const cookies = cookie.parse(document.cookie);

const Listings = (props) => {
  console.log("🥗", props);
  console.log("🥗🍪", cookies);

  return (
    <Container maxWidth="lg" fixed>
      <h2 style={{ textAlign: "center", fontSize: "50px" }}>
        Local Small Businesses
      </h2>
      {document.cookie == "loggedIn=true" ? (
        <h4>Welcome, {props.user}</h4>
      ) : null}
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name </TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Hours</TableCell>
            <TableCell>Address</TableCell>
            {document.cookie == "loggedIn=true" ? (
              <TableCell>Delete</TableCell>
            ) : null}
          </TableRow>
        </TableHead>
        <TableBody>
          {props.listings.map((business, idx) => (
            <TableRow key={business.id}>
              <TableCell>
                <Link to={`/listings/${business.id}`}>
                  {business["businessName"]}{" "}
                </Link>
              </TableCell>
              <TableCell>{business["businessDescription"]}</TableCell>
              <TableCell>{business["businessHours"]}</TableCell>
              <TableCell>{business["businessAddress"]}</TableCell>
              {document.cookie === "loggedIn=true" ? (
                <TableCell>
                  <DeleteIcon
                    onClick={() => props.removeListings(idx)}
                    style={{ color: "red" }}
                  />
                </TableCell>
              ) : null}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
};

export default Listings;
