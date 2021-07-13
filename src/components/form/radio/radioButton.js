import React from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import classNames from "classnames";

export const RadioButton = ({ name, label, register, value, isNotInline }) => {
  const { t } = useTranslation();

  return (
    <div
      className={classNames("custom-control", "custom-radio", {
        "custom-control-inline": !isNotInline,
      })}>
      <input
        ref={register}
        value={value}
        type="radio"
        id={`${name}_${value}`}
        name={name}
        className="custom-control-input"
      />

      <label className="custom-control-label" htmlFor={`${name}_${value}`}>
        {t(label)}
      </label>
    </div>
  );
};

RadioButton.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.shape().isRequired,
  register: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
  isNotInline: PropTypes.bool,
};

RadioButton.defaultProps = {
  isNotInline: false,
};
