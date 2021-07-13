import { LOGIN_USER, LOGOUT_USER, UPDATE_USER } from "../types";

const INITIAL_STATE = {
  user: null,
  token: null,
  type: null,
};

export default (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        ...action.data,
      };
    case LOGOUT_USER:
      return { ...INITIAL_STATE };
    case UPDATE_USER:
      return { ...state, ...action.data };

    default:
      return state;
  }
};
