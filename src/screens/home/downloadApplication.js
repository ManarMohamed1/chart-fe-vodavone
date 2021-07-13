/**
 * @description      :
 * @author           : Nonaa
 * @group            :
 * @created          : 05/07/2021 - 23:47:30
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 05/07/2021
 * - Author          : Nonaa
 * - Modification    :
 * */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useTranslation } from "react-i18next";

export const DownloadApplication = () => {
  const { t } = useTranslation();
  return (
    <div className="available-app-area mt-5">
      <div className="container">
        <div className="row d-flex justify-content-between">
          <div className="col-xl-5 col-lg-6">
            <div className="app-caption">
              <div className="section-tittle section-tittle3">
                <h2>{t("Our App Available For Any Device Download now")}</h2>
                <p className="ps-0 pe-4">
                  {t(
                    "We have built  mobile apps for both android and IOS to support you all the time. download now.",
                  )}
                </p>
                <div className="app-btn">
                  <a href="#" className="app-btn1 pe-2">
                    <img src="./assets/images/xapp_btn1.png.pagespeed.ic.YpLN5QcG95.webp" alt="" />
                  </a>
                  <a href="#" className="app-btn2">
                    <img src="./assets/images/xapp_btn2.png.pagespeed.ic._NK39AKizi.webp" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="app-img">
              <img src="./assets/images/xavailable-app.png.pagespeed.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
