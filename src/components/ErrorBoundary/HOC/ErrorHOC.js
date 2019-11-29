import React from "react";

function Wrapper(WrappedComponent) {
  console.log("Hoc", WrappedComponent.name);
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: "",
        info: ""
      };
    }
    componentDidCatch(error, info) {
      console.log("error", error);
      this.setState({ error, info });
    }
    render() {
      if (this.state.error) {
        return <div>Something Went worng</div>;
      }
      return <WrappedComponent {...this.props} />;
    }
  };
}
export default Wrapper;
