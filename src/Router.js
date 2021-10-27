import React from "react";
import { Switch, Route, Redirect } from "react-router";
import { BrowserRouter } from "react-router-dom";

import AddNew from "./containers/AddNew";
import ListingDetail from "./containers/ListingDetail";
import Listings from "./containers/Listings";
import Login from "./containers/Login";
import Navigation from "./components/Navigation";
import cookie from "cookie";

const checkAuth = () => {
  const cookies = cookie.parse(document.cookie);
  console.log("🍪", document.cookie);
  return cookies["loggedIn"] ? true : false;
};

const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        checkAuth() ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

const Router = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Listings} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/listings/:id" component={ListingDetail} />
        <ProtectedRoute path="/AddNew" component={AddNew} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
