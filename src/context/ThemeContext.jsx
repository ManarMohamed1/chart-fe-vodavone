import React, { createContext, useState } from 'react';

export const ThemeContext = createContext()

export const ThemeProvider = (props) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const color = theme === "light" ? "#333" : "#f8f9fa";
  const backgroundColorA = theme === "light" ? "#e6e8e9" : "#333";
  const backgroundColorB = theme === "light" ? "#fff" : "#212121";


  return (
    <ThemeContext.Provider value={{ theme, color, backgroundColorA, backgroundColorB, toggleTheme }}>{props.children}</ThemeContext.Provider>
  )
}
