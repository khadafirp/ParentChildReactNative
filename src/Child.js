import React from "react";

export default class Child extends React.Component {
  // render() {
  //     return (
  //         <button onClick={props.doWhatEver}>{props.title}</button>
  //     )
  //   }

  constructor(props) {
    super(props);
  }

  componentHere() {
    this.props.childCall();
  }

  render() {
    return (
      <div>
        <h1> Child Component </h1>
        <h1> {this.props.data} </h1>
        <h1> {this.componentHere()} </h1>
        <button onClick={() => this.componentHere()}>
          {" "}
          Click me for alert{" "}
        </button>
      </div>
      //  child = (props) => {
      //     <button onClick={props.doWhatEver}>{props.title}</button>
      //  }
    );
  }
}
