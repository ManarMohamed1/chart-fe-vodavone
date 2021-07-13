/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import PropTypes from "prop-types";
import mime from "mime-types";
import classNames from "classnames";

export const FilesPreview = ({ files, isPreview }) => {
  const handleMediaIcon = (file) => {
    const type = mime.lookup(file);
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

  const handleMediaType = (file) => {
    const mediaIcon = handleMediaIcon(file);

    return (
      <p className="preview-filename">
        <i className={`${mediaIcon} me-2 `} />
        <a href={file} target="_blank" rel="noreferrer">
          <span style={{ wordBreak: "break-all" }}> {formatFileName(file)}</span>
        </a>
      </p>
    );
  };

  const mediaPreview = () => (
    <div className={classNames("mt-1")}>
      <div className="mx-0 row justify-content-between">
        {files.map((file, idx) => {
          return (
            <div className={classNames("col-md-5", { "px-0": isPreview })} key={file}>
              <div className="d-flex justify-content-between align-files-baseline">
                {handleMediaType(file, idx)}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  const formatFileName = (name) => {
    let seperator;
    if (name.includes("original/")) seperator = "original/";
    if (name.includes("files/")) seperator = "files/";
    if (name.includes("thumbnail/")) seperator = "thumbnail/";
    return name.substring(name.lastIndexOf(seperator) + seperator.length + 11);
  };

  return mediaPreview();
};

FilesPreview.propTypes = {
  files: PropTypes.arrayOf().isRequired,
  isPreview: PropTypes.boolean,
};
FilesPreview.defaultProps = {
  removeMedia: null,
  isPreview: false,
};
