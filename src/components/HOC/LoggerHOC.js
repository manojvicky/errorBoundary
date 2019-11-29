import React from "react";

const LoggerHOC = ContextValue => {
  console.log("component mounted", ContextValue);
  return WrappedComponent => {
    return function(props) {
      return (
        <ContextValue.Consumer>
          {context => {
            console.log("wrapper context", context);
            return <WrappedComponent context={context} {...props} />;
          }}
        </ContextValue.Consumer>
      );
    };
  };
};
export default LoggerHOC;
