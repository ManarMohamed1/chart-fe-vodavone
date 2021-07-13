import { CHANGE_LANG } from "../types";
import "../../i18n/i18n";

export const changeLang = (locale, isRTL) => {
  // if (isRTL) {
  //   document.getElementById("website-layout").setAttribute("href", "/css/layout/right-to-left.css");
  // } else {
  //   document.getElementById("website-layout").setAttribute("href", "/css/layout/left-to-right.css");
  // }
  return {
    type: CHANGE_LANG,
    locale,
    isRTL,
  };
};
