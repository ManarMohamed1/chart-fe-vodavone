/* eslint-disable no-case-declarations */
import { UPDATE_SPINNER_STATUS, CLEAR_SPINNER_STATUS, SET_UPLOAD_PROGRESS, SET_COUNTRY, SET_CAMP, SET_SCHOOL } from "../types";

const INITIAL_STATE = {
  spinnerStatus: {},
  uploadProgress: 0,
  updateUnSeenMessagesFlag: false,
};

export default (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case UPDATE_SPINNER_STATUS:
      return { ...state, spinnerStatus: { ...state.spinnerStatus, ...action.loading } };
    case CLEAR_SPINNER_STATUS:
      return { ...state, spinnerStatus: INITIAL_STATE.spinnerStatus };
    case SET_UPLOAD_PROGRESS:
      return { ...state, uploadProgress: action.uploadProgress };
    default:
      return state;
  }
};
