import React from "react";
import { dynamicThemeContext } from "../../context";
import LoggerHOC from "../HOC/LoggerHOC";

@LoggerHOC(dynamicThemeContext)
class ThemedButton extends React.Component {
  // static contextType = dynamicThemeContext;
  render() {
    console.log("dynamic context", this.context, this.props);
    const props = this.props;
    return (
      <div>
        <dynamicThemeContext.Consumer>
          {value => {
            console.log("value dyanmic", value);
            return <div>{value.background}</div>;
          }}
        </dynamicThemeContext.Consumer>
        <button
          style={{
            background: this.context.background,
            color: this.context.foreground
          }}
          {...props}
        />
      </div>
    );
  }
}
export default ThemedButton;
ThemedButton.contextType = dynamicThemeContext;
