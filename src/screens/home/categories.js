import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { updateSpinnerStatus } from "../../redux/actions";
import api from "../../services/api";

export const Categories = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const [{ loading: donationLoading, data: donationCategory }] = api.useAxios({
    url: "/donation-types",
  });

  const renderDonationCategories = () => {
    return donationCategory?.donation_types.map((category) => {
      return (
        <div className="col-md-6 col-lg-4 mb-120">
          <div className="elementor-widget-container">
            <div className="text-center aheto-features--sterling-4 ">
              <div
                className="aheto-features-block__image"
                style={{
                  backgroundImage:
                    `url(${category.icon_original_path})` ||
                    "url(https://n.foxdsgn.com/sterling-3/wp-content/uploads/2020/03/icon-features-1.png)",
                }}
              />
              <div className="aheto-features__content">
                <h4 className="aheto-content-block__title">{category.name}</h4>
              </div>
            </div>{" "}
          </div>
        </div>
      );
    });
  };

  useEffect(() => {
    dispatch(updateSpinnerStatus({ donationLoading }));
  }, [donationLoading]);

  return (
    <section className="categories">
      <div className="container">
        <div className="section-header text-lg-start">
          <h2 className="title">{t("Donation Categories")}</h2>
          <p>{t("We have made a set of available donation categories to help you.")}</p>
        </div>

        <div className="row">{renderDonationCategories()}</div>
      </div>
    </section>
  );
};
