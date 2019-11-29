import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

function fluent(fn) {
  return function(...args) {
    let argsn = [].slice.call(arguments);
    console.log("args", this);
    fn.apply(this, argsn);
    return this;
  };
}
function decorater(target, name, des) {
  console.log(target);
  console.log(name);
  console.log(des);
}
@decorater
class Person {
  @decorater
  setName(fname, lname) {
    this.fname = fname;
    this.lname = lname;
  }
  getName() {
    console.log(`My name is ${this.fname} ${this.lname}.`);
  }
}

const person = new Person();
person.setName("manoj", "prajapati");
person.getName();
function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
