import { combineReducers } from "redux";
import langState from "./lang";
import userState from "./user";
import generalState from "./general";

export default combineReducers({
  langState,
  userState,
  generalState,
});
