import React, { lazy } from "react";
import { useSelector } from "react-redux";
import SubHeader from "./SubHeader";

const LoggedInHeader = lazy(() => import("./LoggedInHeader"));
const LoggedOutHeader = lazy(() => import("./LoggedOutHeader"));

export const Header = () => {
  const { token } = useSelector(({ userState }) => userState);
  return (
    <>
      {token ? <LoggedInHeader /> : <LoggedOutHeader />}
      {/* <SubHeader /> */}
    </>
  );
};
