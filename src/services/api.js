/* eslint-disable no-unused-expressions */
import Axios from "axios";
import _ from "lodash";
import { makeUseAxios } from "axios-hooks";
import LRU from "lru-cache";
import { baseUrl } from "../utils/config";
import { store } from "../redux/store";
import { logoutUser, setUploadProgress } from "../redux/actions";

const toFormData = (data) => {
  const formData = new FormData();
  _.forOwn(data, (value, key) => {
    if (typeof value !== "undefined") {
      if (Array.isArray(value)) {
        for (let i = 0; i < value.length; i += 1) {
          formData.append(`${key}[]`, value[i]);
        }
      } else {
        formData.append(key, value);
      }
    }
  });
  return formData;
};

let apiUrl = `${baseUrl}`;

store.subscribe(() => {
  const state = store.getState();
  const { locale } = state.langState;
  const { token } = state.userState;
  apiUrl = `${baseUrl}`;

  axios.defaults.baseURL = apiUrl;
  if (token) {
    axios.defaults.headers.common.authorization = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common.authorization;
  }
});

const axios = Axios.create({
  baseURL: apiUrl,
  // timeout: 10000,
  headers: {
    Accept: "application/json",
  },
  // transform request data obj to FormData
  transformRequest: [(data) => toFormData(data)],

  onUploadProgress: (progressEvent) => {
    const uploadPercentage = Math.round((progressEvent.loaded * 100) / progressEvent.total);
    store.dispatch(setUploadProgress(uploadPercentage));
  },
});

axios.interceptors.request.use((config) => {
  // store.dispatch(updateSpinnerStatus({ [config.url]: true }));
  return config;
});
axios.interceptors.response.use(
  (response) => {
    // store.dispatch(updateSpinnerStatus({ [response.config.url]: false }));
    return response;
  },
  (error) => {
    if (error.response) {
      // store.dispatch(updateSpinnerStatus({ [error.response.config.url]: false }));
    }

    if (error.response) {
      // validation errors
      if (error.response.status === 422) {
        const { errors: errorsArr } = error.response.data;
        const validationErrors = [];
        _.forOwn(errorsArr, (value, name) => {
          validationErrors.push({
            name,
            message: value,
          });
        });

        const errors = { ...error, validationErrors };
        return Promise.reject(errors);
      }
      if (error.response.status === 401) {
        store.dispatch(logoutUser());
      }
    }
    return Promise.reject(error);
  },
);

const cache = new LRU({ max: 20 });

const useAxios = makeUseAxios({
  axios,
  cache,
});

export default {
  axios,
  useAxios,
  toFormData,
};
