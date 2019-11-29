import staticThemeContext from "../src/static";
import dynamicThemeContext from "../src/dynamic";
const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
};

export { staticThemeContext, dynamicThemeContext, themes };
