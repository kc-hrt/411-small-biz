import React, { Component } from "react";
import { AppBar, Toolbar, Typography, List, ListItem } from "@material-ui/core";
import { Link } from "react-router-dom";

export default class Navigation extends Component {
  logOutUser = (e) => {
    e.preventDefault();
    document.cookie = "loggedIn=false;max-age=0*0";
    window.location.replace("/login");
    console.log("🚽");
  };

  render() {
    return (
      <AppBar position="static" style={{ backgroundColor: "green" }}>
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Local Small Businesses
          </Typography>
          <List className="nav">
            <ListItem className="nav-item">
              {document.cookie === "loggedIn=true" ? null : (
                <Link style={{ textDecoration: "none" }} to="/login">
                  {" "}
                  Login{" "}
                </Link>
              )}
            </ListItem>
            <ListItem className="nav-item">
              <Link style={{ textDecoration: "none" }} to="/">
                Listings
              </Link>
            </ListItem>
            <ListItem className="nav-item">
              {document.cookie === "loggedIn=true" ? (
                <Link style={{ textDecoration: "none" }} to="/AddNew">
                  Add
                </Link>
              ) : null}
            </ListItem>
            <ListItem className="nav-item">
              {document.cookie === "loggedIn=true" ? (
                <Link
                  style={{ textDecoration: "none" }}
                  to="/logout"
                  onClick={this.logOutUser}
                >
                  Logout
                </Link>
              ) : null}
            </ListItem>
          </List>
        </Toolbar>
      </AppBar>
    );
  }
}
