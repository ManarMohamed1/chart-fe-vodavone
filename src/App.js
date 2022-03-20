/* eslint-disable no-unused-expressions */
/* eslint-disable camelcase */
import React, { lazy, useContext, useEffect } from "react";
import {
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import {
  Header,
  Spinner,
  ScrollToTop,
} from "./components";
import { Home } from "./screens/home/Home";
import { ThemeContext } from "./context/ThemeContext";

const SchoolDetails = lazy(() => import("./screens/schoolDetails/SchoolDetails"));

function App() {
  const { i18n } = useTranslation();
  const { locale, isRTL } = useSelector(({ langState }) => langState);
  const { backgroundColorA } = useContext(ThemeContext)

  useEffect(() => {
    document.body.style.backgroundColor = backgroundColorA;
  }, [backgroundColorA])

  useEffect(() => {
    i18n.changeLanguage(locale).then(() => {
      if (isRTL) {
        document
          .getElementById("website-layout")
          .setAttribute("href", "/assets/css/layout/right-to-left.css");
      } else {
        document
          .getElementById("website-layout")
          .setAttribute("href", "/assets/css/layout/left-to-right.css");
      }
    });
  }, [locale, isRTL]);

  return (
    <>
      <ScrollToTop />
      <Spinner />
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/school-details">
          <SchoolDetails />
        </Route>
        <Redirect from="*" to="/404" />
      </Switch>
    </>
  );
}

export default App;
