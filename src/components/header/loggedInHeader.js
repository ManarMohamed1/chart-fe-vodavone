import React from "react";
import { useTranslation } from "react-i18next";

const LoggedInHeader = () => {
  const { t } = useTranslation();

  return (
    <>
      <header>
        Header
      </header>
    </>
  );
};

export default LoggedInHeader;
