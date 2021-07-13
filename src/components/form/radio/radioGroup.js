/* eslint-disable eqeqeq */
import React from "react";
import PropTypes from "prop-types";
import { RadioButton } from "./radioButton";

export const RadioGroup = ({ name, data, register, isNotInline }) => {
  const renderButtons = () => {
    return data.map((item, index) => {
      const value = index + 1;
      return (
        <RadioButton
          name={name}
          label={item.label}
          value={value}
          register={register}
          isNotInline={isNotInline}
          key={`${item.label}_${index + 1}`}
        />
      );
    });
  };

  return <>{renderButtons()}</>;
};

RadioGroup.propTypes = {
  data: PropTypes.arrayOf().isRequired,
  register: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  isNotInline: PropTypes.bool,
};

RadioGroup.defaultProps = {
  isNotInline: false,
};
