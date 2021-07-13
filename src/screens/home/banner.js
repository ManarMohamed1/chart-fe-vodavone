/* eslint-disable jsx-a11y/anchor-is-valid */
/**
 * @description      :
 * @author           : Nonaa
 * @group            :
 * @created          : 03/07/2021 - 11:07:51
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 03/07/2021
 * - Author          : Nonaa
 * - Modification    :
 * */
import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IMAGES } from "../../common/images";

export const Banner = () => {
  const { t } = useTranslation();
  const user = useSelector((state) => state.userState.user);
  const { isRTL } = useSelector(({ langState }) => langState);

  const { bannerBackground, bannerShape } = useMemo(() => {
    return isRTL
      ? { bannerBackground: IMAGES.bannerBgRTL, bannerShape: IMAGES.bannerShapeRTL }
      : { bannerBackground: IMAGES.bannerBgLTR, bannerShape: IMAGES.bannerShapeLTR };
  }, [isRTL]);

  return (
    <section
      className="banner-section-4 bg_img oh"
      style={{ backgroundImage: `url(${bannerBackground})` }}
      data-background={bannerBackground}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-10 col-lg-6 col-xl-7">
            <div className="banner-content cl-white">
              {/* <h5 className="cate">Enjoy Exclusive</h5> */}
              <h1 className="title">{t("Make An Impact By Finding Your Charity")}</h1>
              <p className="mw-500">
                {t(
                  "Thub non-profit organization which collects donations from people an d give it to the people who need it and also sells products and gives the profit to the people who needs it.",
                )}
              </p>
              <Link to={user ? "/donation" : "/auth"} className="custom-button yellow btn-large">
                {t("Donate Now")}
              </Link>
              <div className="app-btn mt-4">
                <a href="#" className="app-btn1 me-3">
                  <img
                    src="./assets/images/xapp_btn1.png.pagespeed.ic.YpLN5QcG95.webp"
                    alt=""
                    width="150px"
                  />
                </a>
                <a href="#" className="app-btn2">
                  <img
                    src="./assets/images/xapp_btn2.png.pagespeed.ic._NK39AKizi.webp"
                    alt=""
                    width="150px"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-xl-4">
            <div className="banner-thumb-4">
              <img src="./assets/images/banner/banner-4.png" alt="banner" />
            </div>
          </div>
        </div>
      </div>
      <div className="banner-shape d-none d-lg-block bot-0">
        <img src={bannerShape} alt="css" />
      </div>
    </section>
  );
};
