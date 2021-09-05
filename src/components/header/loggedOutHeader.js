/**
 * @description      :
 * @author           : Nonaa
 * @group            :
 * @created          : 04/07/2021 - 00:23:27
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 04/07/2021
 * - Author          : Nonaa
 * - Modification    :
 * */
/* eslint-disable jsx-a11y/role-supports-aria-props */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import classNames from "classnames";
import { IMAGES } from "../../common/images";
import { changeLang } from "../../redux/actions";
import { CustomSelect } from "../customSelect";
import { langOptions } from "../../utils/config";

const LoggedOutHeader = () => {
  return (
    <>
      <header>Header</header>
    </>
  );
};
export default LoggedOutHeader;
