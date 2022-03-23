// App.js
import React, { Component } from "react";
import "./App.css";
import { connect, sendMsg } from "./api";

// TODO: function components
class App extends Component {
  constructor(props) {
    super(props);
    connect();
  }

  send() {
    console.log("hello");
    sendMsg("hello Golang");
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.send}>Hit</button>
      </div>
    );
  }
}

export default App;
