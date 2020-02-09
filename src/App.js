// import React from "react";
import React, { Component, useState } from "react";
import Child from "./Child";
import ReactDOM from "react-dom";
import "./styles.css";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  childCall() {
    alert("You are awesome");
  }

  render() {
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <Child childCall={this.childCall.bind(this)} data="Hello Child" />
      </div>
    );
  }
}
