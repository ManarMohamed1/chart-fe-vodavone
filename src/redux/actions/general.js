import { UPDATE_SPINNER_STATUS, CLEAR_SPINNER_STATUS, SET_UPLOAD_PROGRESS } from "../types";

export const updateSpinnerStatus = (loading) => {
  return { type: UPDATE_SPINNER_STATUS, loading };
};

export const clearSpinnerStatus = () => {
  return { type: CLEAR_SPINNER_STATUS };
};

export const setUploadProgress = (uploadProgress) => ({
  type: SET_UPLOAD_PROGRESS,
  uploadProgress,
});
