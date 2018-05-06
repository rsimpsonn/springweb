import React, { Component } from "react";
import styled from "styled-components";
import firebase from "firebase";
import Head from "../Components/Header";
require("firebase/firestore");

export default class BlogPost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
      headline: ""
    };

    this.db = firebase.firestore();
    this.processParagraph = this.processParagraph.bind(this);
  }

  componentDidMount() {
    this.db.doc(`posts/${this.props.match.params.postId}`).get().then(doc => {
      const data = doc.data();

      this.setState({
        text: data.text,
        headline: data.headline,
        author: data.author
      });
    });
  }

  processParagraph(text) {}

  render() {
    return (
      <div>
        <Head full={true} />
        <MainView>
          <Headline>{this.state.headline}</Headline>
          <Author>by {this.state.author}</Author>
          {this.state.text
            .split("&;")
            .map(text => <Paragraph>{text}</Paragraph>)}
        </MainView>
      </div>
    );
  }
}

const Headline = styled.p`
  font-family: Avenir-Heavy, sans-serif;
  font-size: 60px;
  color: #484848;
  margin-top: 80px;
  text-align: center;
  margin-bottom: 10px;
`;

const MainView = styled.div`
  padding: 40px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Author = styled.p`
  font-family: Avenir-Book, sans-serif;
  color: #DCDCDC;
  font-size: 20px;
  letter-spacing: 0.6px;
  text-align: center;
`;

const Paragraph = styled.p`
  font-family: Avenir-Book, sans-serif;
  letter-spacing: 0.6px;
  font-size: 18px;
  line-height: 35px;
  width: 80%;
`;
