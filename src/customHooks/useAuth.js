import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import { loginUser, updateSpinnerStatus } from "../redux/actions";
import api from "../services/api";

export const useAuth = () => {
  const history = useHistory();
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const [{ loading: registerLoading }, sendRegister] = api.useAxios(
    { method: "post" },
    { manual: true },
  );

  const registerUser = ({ data, setError, userType }) => {
    sendRegister({ data, url: `${userType}/register` })
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: t("Success"),
          text: t(
            "Congratulations you have successfully signed up. you will be redirected to verification page to submit your verification code that you received on your phone.",
          ),
        }).then(() => {
          storeUser(res, userType);
          history.push({
            pathname: "/verification",
            code: res.data[userType].verify_code,
          });
        });
      })
      .catch((err) => {
        if (err.validationErrors) {
          err.validationErrors.forEach(({ name, type, message }) => {
            setError(name, { type, message });
          });
        }
      });
  };

  useEffect(() => {
    dispatch(updateSpinnerStatus({ registerLoading }));
  }, [registerLoading]);

  const storeUser = (res, type) => {
    dispatch(loginUser({ ...res.data, type }));
  };

  return { storeUser, registerUser };
};
