import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import propTypes from "prop-types";

export const PasswordInput = ({ register, name, placeholder }) => {
  const { t } = useTranslation();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <label htmlFor={name}>{t(placeholder)}</label>
      <div className="input-group">
        <input
          ref={register}
          name={name}
          id={name}
          placeholder={t(placeholder)}
          type={showPassword ? "text" : "password"}
          className="form-control text-muted"
        />
        <div className="input-group-append">
          <button
            type="button"
            className="input-group-text"
            onClick={() => setShowPassword(!showPassword)}>
            <i className={showPassword ? "fas fa-eye-slash" : "fas fa-eye"} aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
};
PasswordInput.propTypes = {
  register: propTypes.func.isRequired,
  name: propTypes.string.isRequired,
  placeholder: propTypes.string.isRequired,
};
