import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

export const GuestRoute = ({ children, ...rest }) => {
  const { token } = useSelector(({ userState }) => userState);

  return (
    <Route
      {...rest}
      render={({ location }) => {
        return token ? <Redirect from={location} to="/" /> : children;
      }}
    />
  );
};

GuestRoute.propTypes = {
  children: PropTypes.element.isRequired,
};
