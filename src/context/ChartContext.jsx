import { createContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const ChartContext = createContext()

export const ChartContextProvider = (props) => {
  const { country, camp, school, data } = useSelector(({ searchOptionsState }) => searchOptionsState);
  const [filteredData, setFilteredData] = useState([])
  const [schools, setSchools] = useState([])
  const colors = ['red', 'green', 'blue', 'purple', 'brown', 'black', 'orange', 'yellow']

  useEffect(() => {
    const filteredData = data.filter(item =>
    (country === item.country &&
      camp === item.camp &&
      (school === "show-all" || school === item.school)
    ))

    setFilteredData(filteredData)
    const schoolNames = []

    setSchools(filteredData
      .filter((item) => {
        if (schoolNames.indexOf(item.school) === -1) {
          schoolNames.push(item.school)
          return true
        }
        return false
      })
      .map((item, i) => ({ name: item.school, showInChart: true, color: colors[i] })))
  }, [country, camp, school])



  return (
    <ChartContext.Provider value={{ filteredData, schools, setSchools }}>
      {props.children}
    </ChartContext.Provider>
  )
}