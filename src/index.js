import React from "react";
import ReactDOM from "react-dom";
import DemoComp from "../src/components/DemoComp/DemoComp";
import DemoComp1 from "../src/components/DemoComp/DemoComp1";
import Boundary from "../src/components/ErrorBoundary/Boundary/Boundary";
import Counter from "../src/components/DemoComp/Counter";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <DemoComp />
        <Boundary>
          <DemoComp1 />
        </Boundary>
        <Counter />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
