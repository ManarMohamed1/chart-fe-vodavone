/* eslint-disable no-unused-expressions */
import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { ProtectedRoute } from "./protectedRoute";

export const VerifiedRoute = ({ children, requiredType, ...rest }) => {
  const { type, customer, driver, company } = useSelector(({ userState }) => userState);
  const [currentUser, setCurrentUser] = useState({});
  const [pathName, setPathName] = useState(null);

  useEffect(() => {
    if (type === "customer") setCurrentUser(customer);
    if (type === "driver") setCurrentUser(driver);
    if (type === "company") setCurrentUser(company);
  }, [type, customer, driver, company]);

  useEffect(() => {
    currentUser?.email_verified_at ? setPathName(null) : setPathName("/verification");
    if (requiredType) type === requiredType ? setPathName(null) : setPathName("/");
  }, [currentUser, requiredType, type]);

  return (
    <ProtectedRoute {...rest}>
      {pathName ? (
        <Redirect
          to={{
            pathname: pathName,
          }}
        />
      ) : (
        children
      )}
    </ProtectedRoute>
  );
};
VerifiedRoute.propTypes = {
  children: PropTypes.element.isRequired,
  requiredType: PropTypes.string,
};
VerifiedRoute.defaultProps = {
  requiredType: null,
};
