/* eslint-disable import/no-cycle */
import { LOGIN_USER, LOGOUT_USER, UPDATE_USER } from "../types";

export const loginUser = (data) => ({
  type: LOGIN_USER,
  data,
});

export const updateUser = (data) => ({
  type: UPDATE_USER,
  data,
});

export const logoutUser = () => ({
  type: LOGOUT_USER,
});
