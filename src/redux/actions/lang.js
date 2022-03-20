import { CHANGE_LANG } from "../types";
import "../../i18n/i18n";

export const changeLang = (locale, isRTL) => {
  return {
    type: CHANGE_LANG,
    locale,
    isRTL,
  };
};

