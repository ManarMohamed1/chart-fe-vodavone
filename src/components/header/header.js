import React, { lazy } from "react";
import { useSelector } from "react-redux";

const LoggedInHeader = lazy(() => import("./loggedInHeader"));
const LoggedOutHeader = lazy(() => import("./loggedOutHeader"));

export const Header = () => {
  const { token } = useSelector(({ userState }) => userState);
  return (
    <>
      {token ? <LoggedInHeader /> : <LoggedOutHeader />}
    </>
  );
};
