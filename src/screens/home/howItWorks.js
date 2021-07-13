/**
 * @description      :
 * @author           : Nonaa
 * @group            :
 * @created          : 07/07/2021 - 00:07:08
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 07/07/2021
 * - Author          : Nonaa
 * - Modification    :
 * */
import React from "react";
import { useTranslation } from "react-i18next";

export const HowItWorks = () => {
  const { t } = useTranslation();

  return (
    <section className="how-section padding-top padding-bottom pos-rel">
      <div className="container">
        <div className="section-header text-lg-start">
          <h2 className="title">{t("How it works")}</h2>
          <p>{t("Easy 3 steps to donate")}</p>
        </div>
        <div className="row justify-content-center mb--40">
          <div className="col-md-6 col-lg-4">
            <div className="how-item">
              <div className="how-thumb">
                <img src="./assets/images/how/how1.png" alt="how" />
              </div>
              <div className="how-content">
                <h4 className="title">{t("Sign Up")}</h4>
                <p>{t("Use Only Phone Number to donate with us")}</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="how-item">
              <div className="how-thumb">
                <img src="./assets/images/how/how2.png" alt="how" />
              </div>
              <div className="how-content">
                <h4 className="title">{t("Donate / Buy a Product")}</h4>
                <p>
                  {t(
                    "Donate with your own items or buy one and it's money will go to the people who need it.",
                  )}
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="how-item">
              <div className="how-thumb">
                <img src="./assets/images/how/how3.png" alt="how" />
              </div>
              <div className="how-content">
                <h4 className="title">{t("Congratulations")}</h4>
                <p>{t("You have already helped to make the world petter place")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
