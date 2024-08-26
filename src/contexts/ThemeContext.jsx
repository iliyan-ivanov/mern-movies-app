import React, { useState } from "react";

export const ThemeContext = React.createContext({});

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const rootElement = document.getElementById("root");

  const toggleTheme = () => {
    const upgradeTheme = theme == "light" ? "dark" : "light";
    setTheme(upgradeTheme);
  };

  theme == "light"
      ? (rootElement.style.backgroundColor = "white")
      : (rootElement.style.backgroundColor = "black")
  

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
