import React, { Component } from "react";
import styled from "styled-components";
import Head from "../Components/Header";
import Member from "../Components/Member";
import firebase from "firebase";
require("firebase/firestore");

export default class Team extends Component {
  constructor(props) {
    super(props);

    this.state = {
      members: []
    };

    this.db = firebase.firestore();
  }
  componentDidMount() {
    this.db.collection("team").get().then(snapShot => {
      var array = [];
      snapShot.forEach(doc => {
        const data = doc.data();
        array.push({
          name: data.name,
          picture: data.picture,
          url: data.url
        });
      });
      this.setState({
        members: array
      });
    });
  }

  render() {
    return (
      <div>
        <Head full={true} />
        <MainView>
          <Header>Our Team</Header>
        </MainView>
        <ListView>
          {this.state.members.map(member => <Member member={member} />)}
        </ListView>
      </div>
    );
  }
}

const Header = styled.p`
  font-family: Avenir-Heavy, sans-serif;
  letter-spacing: 0.6px;
  font-size: 20px;
  margin-top: 80px;
  color: #484848;
  line-height: 10px;
`;

const MainView = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ListView = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;
