import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { clearSpinnerStatus } from "../../redux/actions";

export const ProtectedRoute = ({ children, ...rest }) => {
  const { customer, driver, company } = useSelector(({ userState }) => userState);
  const distpatch = useDispatch();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        customer || driver || company
          ? children
          : distpatch(clearSpinnerStatus()) && (
              <Redirect
                to={{
                  pathname: "/",
                  state: { from: location },
                }}
              />
            )
      }
    />
  );
};

ProtectedRoute.propTypes = {
  children: PropTypes.element.isRequired,
};
