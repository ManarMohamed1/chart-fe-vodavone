import _ from 'lodash';
import React, { useContext, useEffect, useState } from 'react'
import { Form } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { ChartContext } from '../../context/ChartContext';
import { useTranslation } from 'react-i18next';

export const RightSideBar = () => {
  const { t } = useTranslation();
  const { country, camp } = useSelector(({ searchOptionsState }) => searchOptionsState);
  const { filteredData, schools, setSchools } = useContext(ChartContext)

  const handleSchoolChange = (e, index) => {
    const editschools = [...schools]
    editschools[index].showInChart = e.target.checked ? true : false;
    setSchools(editschools)
  }

  return (
    <>
      {!country && !camp && <p>{t("Please Select a Country and a Camp to show Data")}</p>}
      {country && camp && <div>
        <section className='camp'>
          <h2>
            {_.sumBy(filteredData, row => row.lessons)} Lessons
          </h2>
          <p className='text-muted'>{camp}</p>
        </section>

        <section className="lessons">
          <Form>
            {schools.map((school, i) => {
              const rows = filteredData.filter(item => item.school === school.name)
              return (
                <div className="mb-3" key={school} style={{ color: school.color }} >
                  <Form.Check type='checkbox' inline id={`check-api-checkbox`} >
                    <Form.Check.Input checked={school.showInChart} onChange={(e) => handleSchoolChange(e, i)} type='checkbox' value={school.name} />
                    <Form.Check.Label>{_.sumBy(rows, row => row.lessons)} {t("Lessons")}</Form.Check.Label>
                    <p>{t("in")} {school.name}</p>
                  </Form.Check>
                </div>
              )
            })}
          </Form>
        </section>


      </div>
      }
    </>
  )
}
