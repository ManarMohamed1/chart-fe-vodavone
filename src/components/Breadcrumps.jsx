/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import propTypes from "prop-types";
import { useTranslation } from "react-i18next";

export const Breadcrumps = ({ breadcrumps }) => {
  const [currentBreadcrumps, setCurrentBreadcrumps] = useState([
    { label: "Home", link: "/" },
    ...breadcrumps,
  ]);
  useEffect(() => {
    setCurrentBreadcrumps([{ label: "Home", link: "/" }, ...breadcrumps]);
  }, [breadcrumps]);

  const { t } = useTranslation();

  const renderBreadcrumps = () => {
    const lastIndex = currentBreadcrumps.length - 1;
    return currentBreadcrumps.map((breadcrump, index) => {
      if (index === lastIndex) return null;
      return (
        <li key={`${breadcrump}__${index}`}>
          <Link to={breadcrump.link}> {t(breadcrump.label)} </Link>
        </li>
      );
    });
  };

  return (
    <section className="breadcrumb-section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <ol className="breadcrumb">
              {renderBreadcrumps()}
              <li
                style={{
                  color: "#3b3b3b",
                  fontWeight: "bold",
                  position: "relative",
                  marginRight: 10,
                }}>
                {" "}
                {currentBreadcrumps[currentBreadcrumps.length - 1]?.label}
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

Breadcrumps.propTypes = {
  breadcrumps: propTypes.arrayOf(propTypes.shape()).isRequired,
};
