import React from "react";
const themes = {
  light: {
    foreground: "rgb(255, 167, 196)",
    background: "rgb(255, 167, 196)"
  },
  dark: {
    foreground: "#ffffff",
    background: "rgb(255, 167, 196)"
  }
};
const dynamicThemeContext = React.createContext(themes.dark);
dynamicThemeContext.displayName = "dynamicThemeContext";
export default dynamicThemeContext;
