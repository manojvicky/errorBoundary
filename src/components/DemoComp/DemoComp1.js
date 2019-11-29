import React from "react";
import ErrorHOC from "../ErrorBoundary/HOC/ErrorHOC";
import Boundary from "../ErrorBoundary/Boundary/Boundary";
import Counter1 from "../DemoComp/Counter1";

// @ErrorHOC
class DemoComp1 extends React.Component {
  handleClick = () => {
    console.log("clicked");
    // try {
    //   this.props.can();
    // } catch (e) {
    //   console.log("error in fxn", e);
    //   // throw e;
    // }
  };
  // componentDidMount() {
  //   // this.props.can();
  // }
  render() {
    return (
      <div onClick={this.handleClick}>
        Demo Comp 1
        <Counter1 />
      </div>
    );
  }
}
export default DemoComp1;
