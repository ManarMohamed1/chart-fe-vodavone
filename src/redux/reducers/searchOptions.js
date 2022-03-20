/* eslint-disable no-case-declarations */
import { SET_COUNTRY, SET_CAMP, SET_SCHOOL, SET_DATA } from "../types";

const INITIAL_STATE = {
  country: '',
  camp: '',
  school: 'show-all',
  data: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_COUNTRY:
      return { ...state, country: action.payload };
    case SET_CAMP:
      return { ...state, camp: action.payload };
    case SET_SCHOOL:
      return { ...state, school: action.payload };
    case SET_DATA:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};
