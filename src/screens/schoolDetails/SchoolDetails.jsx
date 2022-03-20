import React, { useContext } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useLocation, Link } from 'react-router-dom'
import { ThemeContext } from '../../context/ThemeContext';

export const SchoolDetails = () => {
  const { t } = useTranslation();
  const { state } = useLocation()
  const { color, backgroundColorA, backgroundColorB } = useContext(ThemeContext)
  return (
    <div style={{ backgroundColor: backgroundColorA }}>
      <Container className="pt-3" style={{ color, backgroundColor: backgroundColorA }}>
        <Row>
          <Col md={12}>
            <Link className="btn btn-secondary text-start mb-2" to="/">Go Back</Link>
          </Col>
        </Row>
        <Row>
          {state?.map(item => (<Col md={12}>
            <div className="card card-margin" style={{ color, backgroundColor: backgroundColorB }}>
              <div className="card-header no-border">
                <h5 className="card-title">{item.school}</h5>
              </div>
              <div className="card-body pt-0">
                <div className="widget-49">
                  <p> {t("In Camp")} {item.camp} {t("that takes place in")} {item.country} {t("country they anounced that they gave")} {item.lessons} {t("at")} {item.month}</p>
                </div>
              </div>
            </div>
          </Col>))}
        </Row>
      </Container>
    </div>
  )
}

export default SchoolDetails
