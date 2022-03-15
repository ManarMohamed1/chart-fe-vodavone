/* eslint-disable no-unused-expressions */
/* eslint-disable camelcase */
import React, { lazy, useEffect } from "react";
import {
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import {
  Header,
  Footer,
  Spinner,
  ScrollToTop,
} from "./components";
import { Home } from "./screens/home/home";

const Auth = lazy(() => import("./screens/auth/auth"));

function App() {


  return (
    <>
      <ScrollToTop />
      <Spinner />
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/auth">
          <Auth />
        </Route>
        <Redirect from="*" to="/404" />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
