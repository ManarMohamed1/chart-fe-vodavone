/**
 * @description      :
 * @author           : Nonaa
 * @group            :
 * @created          : 03/07/2021 - 14:47:33
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 03/07/2021
 * - Author          : Nonaa
 * - Modification    :
 * */
/* eslint-disable react/jsx-props-no-spreading */
import { ErrorMessage } from "@hookform/error-message";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import { FormError } from "../../components";
import { updateSpinnerStatus } from "../../redux/actions";
import api from "../../services/api";
import { PhoneLoginSchema } from "../../utils/validationSchema";

const Auth = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const history = useHistory();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(PhoneLoginSchema),
  });

  const [{ loading: registerLoading }, registration] = api.useAxios(
    { url: "/user/login", method: "post" },
    { manual: true },
  );

  const onSubmit = (data) => {
    registration({
      data,
    })
      .then((res) => {
        history.push({
          pathname: "/verification",
          code: res.data.code,
          phone: data.phone,
        });
        reset();
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: t("Oops"),
          text: err?.response?.data?.msg || t("Unexpected Error"),
        });
      });
  };

  useEffect(() => {
    dispatch(updateSpinnerStatus({ registerLoading }));
  }, [registerLoading]);

  return (
    <section className="account-section padding-bottom">
      <div className="container">
        <div className="account-wrapper mt--100 mt-lg--370">
          <div className="left-side">
            <div className="section-header">
              <h2 className="title">{t("HI, THERE")}</h2>
              <p>{t("You can register to your thub account here.")}</p>
            </div>
            <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group mb-30">
                <label htmlFor="login-phone">
                  <i className="far fa-envelope" />
                </label>
                <input
                  type="text"
                  id="login-phone"
                  placeholder={t("Phone Number")}
                  {...register("phone")}
                />
                <ErrorMessage errors={errors} name="phone" render={FormError} />
              </div>
              <div className="form-group mb-0">
                <button type="submit" className="custom-button">
                  {t("Register Now")}
                </button>
              </div>
            </form>
          </div>
          <div className="right-side cl-white">
            <div className="section-header mb-0">
              <h3 className="title mt-0">{t("NEW HERE?")}</h3>
              <p>{t("Please, enter your phone number here to help you register and donate.")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Auth;
