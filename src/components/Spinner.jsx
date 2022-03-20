import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Transition } from "react-transition-group";
import propTypes from "prop-types";
import _ from "lodash";

export const Spinner = ({ isOpen }) => {
  const { spinnerStatus } = useSelector(({ generalState }) => generalState);
  const [loading, setLoading] = useState();

  useEffect(() => {
    setLoading(_.some(spinnerStatus, (value) => value === true));
  }, [spinnerStatus]);

  const duration = 300;
  const { t } = useTranslation();
  const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
  };

  const transitionStyles = {
    exiting: { opacity: 0 },
    exited: { opacity: 0, display: "none" },
  };
  return (
    <Transition in={loading || isOpen} timeout={300}>
      {(state) => (
        <div id="custom-overlayer" style={{ ...defaultStyle, ...transitionStyles[state] }}>
          <div className="loader">
            <div className="loader-inner" />
          </div>
        </div>
      )}
    </Transition>
  );
};

Spinner.propTypes = {
  isOpen: propTypes.bool,
};
Spinner.defaultProps = {
  isOpen: false,
};
