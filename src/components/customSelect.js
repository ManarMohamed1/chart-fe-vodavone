/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from "react";
import PropTypes, { shape } from "prop-types";
import Select, { components } from "react-select";
import { useTranslation } from "react-i18next";

export const CustomSelect = ({
  name,
  register,
  options,
  onChange,
  isMulti,
  placeholder,
  defaultValue,
  isDisabled,
  type,
  ...rest
}) => {
  const { t } = useTranslation();

  const selectStyles = {
    control: (styles) => ({
      ...styles,
      width: "100%",
      height: "60px",
      padding: " 0 50px",
      background: "transparent",
      border: "none",
      borderBottom: type === "language" ? "none" : " 1px solid #bccaea",
      borderRadius: 0,
      ...(type === "language" && { boxShadow: "none", padding: "0px" }),
      ":hover": { border: "none" },
      ":focus": { border: "none" },
    }),
    placeholder: (styles) => ({
      ...styles,
    }),
    indicatorSeparator: (styles) => ({
      ...styles,
      display: "none",
    }),
    dropdownIndicator: (styles) => ({
      ...styles,
      ...(type === "language" && { color: "white", ":hover": { color: "white" } }),
    }),
    menu: (styles) => ({
      ...styles,
      zIndex: 100,
    }),
    option: (styles) => ({
      ...styles,
    }),
    singleValue: (styles) => ({
      ...styles,
      ...(type === "language" && { color: "white" }),
    }),

    multiValue: (styles) => {
      return {
        ...styles,
      };
    },
    multiValueLabel: (styles) => ({
      ...styles,
    }),
    multiValueRemove: (styles) => ({
      ...styles,
      ":hover": {},
    }),
  };

  const { Option, SingleValue } = components;
  const IconOption = (props) => (
    <Option {...props}>
      <span className="pe-1">
        <i className={`flag-icon flag-icon-${props.data.icon}`} />
      </span>
      {t(props.data.label)}
    </Option>
  );
  const IconSingleValue = (props) => (
    <SingleValue {...props}>
      <span className="pe-1">
        <i className={`flag-icon flag-icon-${props.data.icon}`} />
      </span>
      {t(props.data.label)}
    </SingleValue>
  );

  const selectTheme = (theme) => ({
    ...theme,
    borderRadius: 0,
    colors: {
      ...theme.colors,
      primary25: "#edd1d1",
      primary50: "#dba3a3",
      primary75: "#c97575",
      primary: "#b74747",
    },
  });

  return (
    <>
      {type === "donation" && (
        <label htmlFor="name">
          <i className="fas fa-th" />
        </label>
      )}
      <Select
        isMulti={isMulti}
        isDisabled={isDisabled}
        closeMenuOnSelect={!isMulti}
        options={options}
        onChange={onChange}
        placeholder={t(placeholder)}
        styles={selectStyles}
        ref={register ? () => register({ name }) : null}
        defaultValue={defaultValue}
        theme={selectTheme}
        components={{
          Option: type === "language" ? IconOption : Option,
          SingleValue: type === "language" ? IconSingleValue : SingleValue,
        }}
        isSearchable={type !== "language"}
        {...rest}
      />
    </>
  );
};

CustomSelect.propTypes = {
  name: PropTypes.string.isRequired,
  register: PropTypes.func,
  options: PropTypes.arrayOf(shape({})),
  onChange: PropTypes.func.isRequired,
  isMulti: PropTypes.bool,
  isDisabled: PropTypes.bool,
  placeholder: PropTypes.string.isRequired,
  defaultValue: PropTypes.string,
  type: PropTypes.string,
};

CustomSelect.defaultProps = {
  options: null,
  defaultValue: null,
  register: null,
  isDisabled: false,
  isMulti: false,
  type: null,
};
