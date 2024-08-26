import React, { useState } from "react";

export const ThemeContext = React.createContext({});

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const htmlElement = document.getElementsByTagName("html")[0];
  const rootElement = document.getElementById("root");

  const toggleTheme = () => {
    const upgradeTheme = theme == "light" ? "dark" : "light";
    setTheme(upgradeTheme);
  };

  if (theme == "light") {
       rootElement.style.backgroundColor = "white";
       htmlElement.style.backgroundColor = "white";
  } else {
      rootElement.style.backgroundColor = "black";
      htmlElement.style.backgroundColor = "black";
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
