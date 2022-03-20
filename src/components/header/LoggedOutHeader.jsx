
import React, { useContext, useState } from "react";
import { Container, Navbar } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";
import { changeLang } from "../../redux/actions";
import { langOptions } from "../../utils/config";
import { CustomSelect } from "../CustomSelect";

const LoggedOutHeader = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { t } = useTranslation();

  const { theme, toggleTheme, backgroundColorB, color } = useContext(ThemeContext)

  const { locale } = useSelector(({ langState }) => langState);

  const [currentLang] = useState(langOptions.find((language) => language.value === locale));
  const [currentLanguages] = useState(langOptions.filter((language) => language.value !== locale));

  const convertLang = async (selectedOption) => {
    const { value, isRTL } = selectedOption;
    if (locale === value) return;
    await dispatch(changeLang(value, isRTL));
    history.go(0);
  };
  return (
    <Navbar testID="loggedOutHeader" variant={theme} style={{ backgroundColor: backgroundColorB, color }}>
      <Container>
        <Navbar.Brand className="fw-bold" href="#home">
          {t("Analysis Chart")}
        </Navbar.Brand>
        <div className="float-end">
          <CustomSelect
            type="language"
            options={currentLanguages}
            placeholder="Language"
            onChange={convertLang}
            defaultValue={currentLang}
          />
          <button className={`btn`} style={{ color, backgroundColorB }} onClick={toggleTheme}>
            {t("Switch to")} {theme === "light" ? "dark" : "light"} {t("mode")}
          </button>
        </div>
      </Container>
    </Navbar>

  );
};
export default LoggedOutHeader;
