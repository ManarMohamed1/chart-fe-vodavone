import React, { useContext, useEffect, useState } from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { ThemeContext } from '../context/ThemeContext';
import { setSelectedCamp, setSelectedCountry, setSelectedSchool } from '../redux/actions';
import { useTranslation } from 'react-i18next';

export const SearchOptions = () => {
  const dispatch = useDispatch()
  const { t } = useTranslation();
  const { color, backgroundColorA } = useContext(ThemeContext)
  const [countries, setCountries] = useState([])
  const [camps, setCamps] = useState([])
  const [schools, setSchools] = useState([])

  const { data: optionsData, country, school, camp } = useSelector(({ searchOptionsState }) => searchOptionsState);

  useEffect(() => {
    if (optionsData) {
      const distictCountries = optionsData
        .map(({ country }) => country)
        .filter((item, index, ref) => ref.indexOf(item) === index)
      const distictCamps = optionsData
        .map(({ camp }) => camp)
        .filter((item, index, ref) => ref.indexOf(item) === index)
      const distictSchools = optionsData
        .map(({ school }) => school)
        .filter((item, index, ref) => ref.indexOf(item) === index)
      setCountries(distictCountries)
      setCamps(distictCamps)
      setSchools(distictSchools)
    }
  }, [optionsData])


  const renderCountries = () => {
    return countries?.map(country => <option key={country} value={country}>{country}</option>)
  }

  const renderCamps = () => {
    return camps?.map(camp => <option key={camp} value={camp}>{camp}</option>)
  }
  const renderSchools = () => {
    return schools.map(school => <option key={school} value={school}>{school}</option>)
  }

  const handleCountryChange = (e) => {
    dispatch(setSelectedCountry(e.target.value))
  }

  const handleCampChange = (e) => {
    dispatch(setSelectedCamp(e.target.value))
  }

  const handleSchoolChange = (e) => {
    dispatch(setSelectedSchool(e.target.value))
  }

  return (
    <div className='search-options pt-4' style={{ color, backgroundColor: backgroundColorA }}>
      <Container>
        <Row>
          <Col xs={4}>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
              <Form.Label column sm="4">
                {t("Select Country")}
              </Form.Label>
              <Col sm="8">
                <div className='me-4 min-w-150px'>
                  <select className="form-select" value={country} aria-label="Select example" onChange={handleCountryChange}>
                    <option value="">{t("Select...")}</option>
                    {renderCountries()}
                  </select>
                </div>
              </Col>
            </Form.Group>
          </Col>
          <Col xs={4}>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
              <Form.Label column sm="4">
                {t("Select Camp")}
              </Form.Label>
              <Col sm="8">
                <div className='me-4 min-w-150px'>
                  <select className="form-select" value={camp} aria-label="Select example" onChange={handleCampChange}>
                    <option value="">{t("Select...")}</option>
                    {renderCamps()}
                  </select>
                </div>
              </Col>
            </Form.Group>
          </Col>
          <Col xs={4}>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
              <Form.Label column sm="4">
                {t("Select School")}
              </Form.Label>
              <Col sm="8">
                <div className='me-4 min-w-150px'>
                  <select className="form-select" value={school} aria-label="Select example" onChange={handleSchoolChange}>
                    <option value="show-all">{t("Show All")}</option>
                    {renderSchools()}
                  </select>
                </div>
              </Col>
            </Form.Group>

          </Col>
        </Row>
      </Container>
    </div>
  )
}
