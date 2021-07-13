import React from "react";
import PropTypes from "prop-types";

export const FormError = ({ message }) => {
  return <div className="invalid-feedback d-block first-letter-capitalized">{message}</div>;
};

FormError.propTypes = { message: PropTypes.string.isRequired };
