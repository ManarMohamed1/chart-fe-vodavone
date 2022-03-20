import React, { useContext, useEffect, useRef, useState } from 'react'
import { getElementAtEvent, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { useHistory } from 'react-router-dom';

import { ChartContext } from '../../context/ChartContext';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const ChartBody = () => {
  const chartRef = useRef();
  const history = useHistory();
  const [dataSets, setDataSets] = useState([])

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'No of Lessons',
      },
    },
  };

  const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const { filteredData, schools } = useContext(ChartContext)

  useEffect(() => {
    const dataSets = schools.filter(school => school.showInChart === true).map((school, i) => {
      const schoolMonthsAsObjects = filteredData.filter(item => item.school === school.name)
      const schoolMonth = {}
      schoolMonthsAsObjects.map(school => (schoolMonth[school.month] = school.lessons))
      return {
        label: school.name,
        data: labels.map(month => schoolMonth[month] ? schoolMonth[month] : 0),
        borderColor: school.color,
        backgroundColor: school.color,
      }
    })
    setDataSets(dataSets)
  }, [schools, filteredData]);

  const onChartClick = (event) => {
    const elements = getElementAtEvent(chartRef.current, event);
    if (elements.length) {
      const schoolData = elements.flatMap((element, i) => {
        const schoolDataSet = dataSets.filter((data, index) => index === element.datasetIndex)
        const schoolLesson = dataSets[element.datasetIndex].data.filter((item, i) => i === element.index)

        return (filteredData.filter((item, i) => {
          console.log(schoolDataSet[0].label, schoolLesson[0], labels[element.index]);
          return item.school === schoolDataSet[0].label &&
            item.lessons === schoolLesson[0] &&
            item.month === labels[element.index]
        }
        ))
      })

      if (schoolData.length) history.push({ pathname: '/school-details', state: schoolData })
    }
  }

  const data = {
    labels,
    datasets: dataSets,
  };

  return (
    <Line ref={chartRef} options={options} data={data} onClick={onChartClick} />
  )
}

