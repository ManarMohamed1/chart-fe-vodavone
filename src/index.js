import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import Modal from "react-modal";
import { PersistGate } from "redux-persist/integration/react";
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store, persistor } from "./redux/store";
import { changeLang } from "./redux/actions";
import { Spinner } from "./components";
import "./i18n/i18n";
// import "react-datetime/css/react-datetime.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "@sweetalert2/theme-bootstrap-4/bootstrap-4.css";

Modal.setAppElement(document.getElementById("root"));

const localStorageData = localStorage["persist:root"];
if (localStorageData) {
  const { langState } = JSON.parse(localStorageData);
  const { locale, isRtl } = JSON.parse(langState);
  store.dispatch(changeLang(locale, isRtl));
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Suspense fallback={<Spinner isOpen />}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Suspense>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root"),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
