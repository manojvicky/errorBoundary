import React from "react";

class Boundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: "",
      info: ""
    };
  }
  static getDerivedStateFromError(error) {
    console.log("error in static", error);
    return { error: true };
  }
  componentDidCatch(error, info) {
    const error1 = "";
    // Error.captureStackTrace(error1);
    console.log("did catch", error, error1);
    this.setState({ error: error.message });
  }
  render() {
    console.log("error", this.state.error);
    if (this.state.error) {
      return (
        <div>
          Something Went worng<div>{this.state.error}</div>
        </div>
      );
    }
    return this.props.children;
  }
}
export default Boundary;
