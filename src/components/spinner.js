import React from "react";
import { useSelector } from "react-redux";
import { Transition } from "react-transition-group";
import _ from "lodash";

export const Spinner = () => {
  const spinnerStatus = useSelector((state) => state.generalState.spinnerStatus);

  const loading = _.some(spinnerStatus, (value) => value === true);

  const duration = 300;

  const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    zIndex: 1000,
  };

  const transitionStyles = {
    entering: { opacity: 0.7 },
    entered: { opacity: 0.7 },
    exiting: { opacity: 0 },
    exited: { opacity: 0, display: "none" },
  };

  return (
    <Transition in={loading} timeout={300}>
      {(state) => (
        <>
          <div
            className="overlayer"
            id="custom-overlayer"
            style={{ ...defaultStyle, ...transitionStyles[state] }}>
            <div className="loader">
              <div className="loader-inner" />
            </div>
          </div>
        </>
      )}
    </Transition>
  );
};
