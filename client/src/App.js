import React, { Component } from "react";
import axios from "axios";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    loggedIn: false
  }

  handleLogin = (event) => {
    event.preventDefault();
    console.log("login clicked!");
    console.log(this);
    axios.post("/login", {
      username: 'postworked',
      password: 'password'
    })
      .then(function(response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
    // this.setState({ loggedIn: true});
  }

  componentDidMount() {
    console.log("componentDidMount lifecycle method ran!");

    axios.get("allusers")
      .then(response => { console.log(response)});
  }

  render() {
    let banner = this.state.loggedIn ? "Woah! You're logged in!" : "UNAUTHORIZED USER";
    return (
      <div className="App">
        <h1>{banner}</h1>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Hello, welcome to Saturday's Live Coded Demo!</h2>
        </div>
        <p className="App-intro">
          <button onClick={this.handleLogin}>Log In To Application</button>
        </p>
      </div>
    );
  }
}

export default App;
