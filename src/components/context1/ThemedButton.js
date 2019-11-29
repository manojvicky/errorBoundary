import React from "react";
import { staticThemeContext } from "../../context";
// import LoggerHOC from "../HOC/LoggerHOC";

// @LoggerHOC(staticThemeContext)
class ThemedButton extends React.Component {
  // static contextType = staticThemeContext;
  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
      value: ""
    };
  }
  static contextType = staticThemeContext;
  render() {
    // console.log("this.themeButton", this.props);
    return (
      <div>
        <staticThemeContext.Consumer>
          {value => <div>{value.theme}</div>}
        </staticThemeContext.Consumer>
        <button
          style={{
            background: this.context.theme === "Dark" ? "black" : "white",
            color: this.context.theme === "Dark" ? "white" : "black"
          }}
          onClick={() => this.context.changeTheme()}
        >
          click me
        </button>
      </div>
    );
  }
}
export default ThemedButton;
// ThemedButton.contextType = staticThemeContext;
