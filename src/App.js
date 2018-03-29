import React, { Component } from "react";
import logo from "./logo.svg";
import firebase from "firebase";
import HomePage from "./Containers/HomePage";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    const config = {
      apiKey: "AIzaSyAOglWbacQOinNiwUvFpg2sROeCbsPMLSw",
      authDomain: "willow-labs.firebaseapp.com",
      databaseURL: "https://willow-labs.firebaseio.com",
      projectId: "willow-labs",
      storageBucket: "willow-labs.appspot.com",
      messagingSenderId: "63302981287"
    };
    firebase.initializeApp(config);
  }
  render() {
    return (
      <div style={{ backgroundColor: "#fff" }}>
        <HomePage />
      </div>
    );
  }
}

export default App;
