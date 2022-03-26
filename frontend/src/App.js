// App.js
import React, { Component } from "react";
import "./App.css";
import { connect, sendMsg } from "./api";
import Header from "./components/Header/index";
import ChatHistory from "./components/ChatHistory/index";

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   connect();
  // }
  constructor(props) {
    super(props);
    this.state = {
      chatHistory: [],
    };
  }
  // Component が Mount された後に実行されるメソッド
  componentDidMount() {
    connect((msg) => {
      console.log("New Message");
      this.setState((prevState) => ({
        chatHistory: [...this.state.chatHistory, msg],
      }));
      console.log(this.state);
    });
  }

  send() {
    console.log("hello");
    sendMsg("hello Golang");
  }

  render() {
    return (
      <div className="App">
        <Header />
        <ChatHistory chatHistory={this.state.chatHistory} />
        <button onClick={this.send}>Hit</button>
      </div>
    );
  }
}

export default App;
