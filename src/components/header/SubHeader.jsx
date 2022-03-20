
import React, { useContext } from "react";
import { Container, Navbar } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { ThemeContext } from "../../context/ThemeContext";

const SubHeader = () => {
  const { t } = useTranslation();
  const { backgroundColorB, color, theme } = useContext(ThemeContext)
  return (
    <Navbar variant={theme} style={{ backgroundColor: backgroundColorB, color }}>
      <Container>
        <Navbar.Brand>
          {t("Number of Lessons")}
        </Navbar.Brand>
      </Container>
    </Navbar>

  )
};
export default SubHeader;
