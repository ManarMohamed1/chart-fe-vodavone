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
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { locale, isRTL: currentIsRTL } = useSelector(({ langState }) => langState);
  const history = useHistory();

  const [currentLang] = useState(langOptions.find((language) => language.value === locale));
  const [currentLanguages] = useState(langOptions.filter((language) => language.value !== locale));

  const convertLang = async (selectedOption) => {
    const { value, isRTL } = selectedOption;
    if (locale === value) return;
    await dispatch(changeLang(value, isRTL));
    history.go(0);
  };

  return (
    <>
      <header>
        <div className="header-top">
          <div className="container">
            <div className="header-top-wrapper">
              <ul className="customer-support">
                <li>
                  <a href="#0" className="me-3">
                    <i
                      className={classNames("fas", {
                        "fa-phone": currentIsRTL,
                        "fa-phone-alt": !currentIsRTL,
                      })}
                    />
                    <span className="ms-2 d-none d-sm-inline-block">{t("Customer Support")}</span>
                  </a>
                </li>
                <li>
                  <div className="header-language-select">
                    <CustomSelect
                      type="language"
                      options={currentLanguages}
                      placeholder="Language"
                      onChange={convertLang}
                      defaultValue={currentLang}
                    />
                  </div>
                </li>
              </ul>
              <ul className="cart-button-area">
                <li>
                  <a href="#" className="cart-button">
                    <i className="flaticon-shopping-basket" />
                    <span className="amount">08</span>
                  </a>
                </li>
                <li>
                  <Link to="/auth" style={{ color: "#fff" }}>
                    {t("Register Now")}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="header-bottom">
          <div className="container">
            <div className="header-wrapper">
              <div className="logo">
                <Link to="/" className="navbar-brand">
                  <img className="custom-logo" src={IMAGES.logo} width="150px" alt="logo" />
                </Link>
              </div>
              <ul className="menu ms-auto">
                <li>
                  <Link to="/">{t("Home")}</Link>
                </li>
                <li>
                  <Link to="/about">{t("About")}</Link>
                </li>
                <li>
                  <Link to="/donation">{t("Donate")}</Link>
                </li>
                <li>
                  <Link to="/products">{t("Products")}</Link>
                </li>
                <li>
                  <Link to="/contact-us">{t("Contact")}</Link>
                </li>
                <li>
                  <Link to="/categories">{t("Categories")}</Link>
                </li>
                <li>
                  <Link to="/faqs">{t("FAQs")}</Link>
                </li>
              </ul>
              <form className="search-form">
                <input type="text" placeholder={t("Search...")} />
                <button type="submit">
                  <i className="fas fa-search" />
                </button>
              </form>
              <div className="search-bar d-md-none">
                <a href="#0">
                  <i className="fas fa-search" />
                </a>
              </div>
              <div className="header-bar d-lg-none">
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default LoggedOutHeader;
