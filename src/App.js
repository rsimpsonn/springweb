import React, { Component } from "react";
import firebase from "firebase";
import HomePage from "./Containers/HomePage";
import Blog from "./Containers/Blog";
import BlogPost from "./Containers/BlogPost";
import { Link, Route, Switch } from "react-router-dom";
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
      <div style={{ width: "100%", height: "100%" }}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/blog" component={Blog} />
          <Route path="/posts/:postId" component={BlogPost} />
        </Switch>
      </div>
    );
  }
}

export default App;
