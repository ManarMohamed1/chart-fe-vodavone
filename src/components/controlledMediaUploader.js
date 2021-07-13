import React from "react";
import { Controller } from "react-hook-form";
import propTypes from "prop-types";
import { MediaUploader } from "./mediaUploader";

export const ControlledMediaUploader = ({
  name,
  accept,
  mediaText,
  control,
  multiple,
  isDisabled,
  ...rest
}) => {
  return (
    <Controller
      name={name}
      id={name}
      render={({ field: { onChange, value } }) => {
        return (
          <MediaUploader
            onChange={(photosArray) => onChange(photosArray)}
            accept={accept}
            multiple={multiple}
            mediaText={mediaText}
            isDisabled={isDisabled}
            value={value || []}
            {...rest}
          />
        );
      }}
      control={control}
    />
  );
};

ControlledMediaUploader.propTypes = {
  name: propTypes.string.isRequired,
  accept: propTypes.string.isRequired,
  mediaText: propTypes.string.isRequired,
  control: propTypes.node.isRequired,
  multiple: propTypes.bool,
  isDisabled: propTypes.bool,
};
ControlledMediaUploader.defaultProps = {
  multiple: false,
  isDisabled: false,
};
