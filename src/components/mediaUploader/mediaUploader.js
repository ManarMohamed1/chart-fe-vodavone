/* eslint-disable consistent-return */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import React, { useRef } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { useTranslation } from "react-i18next";
import styles from "./styles.module.css";

export const MediaUploader = ({
  onChange,
  accept,
  multiple,
  isArray,
  mediaIconClass,
  mediaText,
  uploadActionClasses,
  isDisabled,
  value,
}) => {
  const inputEl = useRef(null);
  const { t } = useTranslation();

  const openDialog = () => {
    if (isDisabled) return null;
    inputEl.current.click();
  };

  const handleChange = (e) => {
    const { files } = e.target;
    if (files.length === 0) return;
    if (multiple) {
      onChange([...value, ...files]);
    } else if (isArray) onChange([files[0]]);
    else onChange(files[0]);
  };

  const onInputClick = () => {
    inputEl.current.value = "";
  };

  const removeMedia = (idx) => {
    let filteredMedia = Array.isArray(value) ? value.filter((item, i) => i !== idx) : null;
    if (filteredMedia?.length === 0) filteredMedia = null;
    onChange(filteredMedia);
  };
  const handleMediaIcon = (type) => {
    switch (true) {
      case type.includes("pdf"):
        return "fas fa-file-pdf";
      case type.includes("image"):
        return "fas fa-file-image";
      case type.includes("officedocument.wordprocessingml"):
        return "fas fa-file-word";
      case type.includes("video"):
        return "fas fa-file-video";
      default:
        return "fas fa-file";
    }
  };
  const handleMediaType = (item) => {
    const mediaIcon = handleMediaIcon(item.type);

    return (
      <p className="preview-filename">
        <i className={`${mediaIcon} me-2 `} />
        <a href={URL.createObjectURL(item)} target="_blank" rel="noreferrer">
          <span style={{ wordBreak: "break-all" }}> {item.name}</span>
        </a>
      </p>
    );
  };

  const mediaPreview = () => {
    const media = Array.isArray(value) ? value : [value];
    return (
      <div className={classNames("mt-4")}>
        <div className="mx-0 row justify-content-between">
          {media.map((item, idx) => {
            return (
              <div className={classNames("col-md-6")} key={idx}>
                <div className="d-flex justify-content-between align-items-baseline">
                  {handleMediaType(item)}
                  <div className="ms-3">
                    <span
                      className={[styles.remove, "shadow-sm"].join(" ")}
                      onClick={() => removeMedia(idx)}>
                      <i className="fa fa-times" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <>
      <button
        disabled={isDisabled}
        type="button"
        className={classNames("btn btn-block", {
          "": !uploadActionClasses,
        })}
        onClick={openDialog}
        style={{ cursor: "pointer" }}>
        <div
          className="row"
          style={{
            height: "60px",
            padding: "0 50px",
            background: "transparent",
            border: "none",
            borderBottom: "1px solid #bccaea",
            borderRadius: 0,
          }}>
          <div
            className="text-end px-2 d-inline-block"
            style={{
              position: "absolute",
              left: 0,
              width: 30,
              height: 30,
              borderRadius: "50%",
              background: "linear-gradient(166deg , #F43D3D 0%, #A50000 100%)",
              boxShadow: "0px 3px 5px 0px rgb(202 153 44 / 30%)",
              color: "#ffffff",
              top: 15,
              textAlign: "center",
              fontSize: "15",
            }}>
            <i className={mediaIconClass || "fas fa-upload"} />
          </div>
          <div className="text-start d-inline-block">
            <span style={{ color: "#808080", fontSize: "18px" }}>{t(mediaText)}</span>
          </div>
        </div>
      </button>
      <input
        type="file"
        onChange={handleChange}
        multiple={multiple}
        accept={accept}
        style={{ display: "none" }}
        ref={inputEl}
        onClick={onInputClick}
      />
      {value && mediaPreview()}
    </>
  );
};

MediaUploader.propTypes = {
  onChange: PropTypes.func.isRequired,
  accept: PropTypes.string,
  multiple: PropTypes.bool,
  isArray: PropTypes.bool,
  mediaIconClass: PropTypes.string,
  mediaText: PropTypes.string.isRequired,
  uploadActionClasses: PropTypes.string,
  isDisabled: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.shape(), PropTypes.arrayOf]).isRequired,
};

MediaUploader.defaultProps = {
  accept: null,
  multiple: false,
  isArray: false,
  mediaIconClass: null,
  uploadActionClasses: null,
  isDisabled: false,
};
