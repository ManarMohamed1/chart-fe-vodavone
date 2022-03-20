import React, { useContext, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Col, Container, Row } from 'react-bootstrap';

import { SearchOptions } from "../../components";
import { RightSideBar, ChartBody } from "./index";
import api from '../../services/api'
import { setData } from '../../redux/actions'
import { ChartContextProvider } from '../../context/ChartContext'
import { ThemeContext } from "../../context/ThemeContext";

export const Home = () => {
  const { color, backgroundColorB, backgroundColorA } = useContext(ThemeContext)
  const dispatch = useDispatch()

  useEffect(() => {
    api
      .axios({
        url: "/data.json",
      })
      .then((res) => {
        if (res.data.encoding === "base64") {
          const file_content = atob(res.data.content)
          const parsedData = JSON.parse(file_content)
          dispatch(setData(parsedData))
        }
      });
  }, [])

  return (
    <ChartContextProvider>
      <SearchOptions />
      <div style={{ backgroundColor: backgroundColorA, color }}  >
        <Container style={{ backgroundColor: backgroundColorB, color }} >
          <Row>
            <Col sm={8}>
              <ChartBody />
            </Col>
            <Col sm={4}>
              <RightSideBar />
            </Col>
          </Row>
        </Container>
      </div>
    </ChartContextProvider>
  );
};
