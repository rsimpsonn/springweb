import React, { Component } from "react";
import styled from "styled-components";
import Head from "../Components/Header";
import MinBlog from "../Components/MinBlog";
import firebase from "firebase";
require("firebase/firestore");

export default class Blog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };

    this.db = firebase.firestore();
  }

  componentDidMount() {
    this.db.collection("posts").get().then(snapShot => {
      var array = [];
      snapShot.forEach(doc => {
        const data = doc.data();
        array.push({
          author: data.author,
          headline: data.headline,
          subtitle: data.subtitle,
          type: data.type,
          cover: data.cover,
          date: data.date,
          key: doc.id
        });
      });
      this.setState({
        posts: array
      });
    });
  }

  render() {
    return (
      <div>
        <Head full={true} />
        <MainView>
          <Header>Our Stories and Our Influencers</Header>
        </MainView>
        <Blogs>
          {this.state.posts.length > 0 &&
            this.state.posts.map(post =>
              <MinBlog
                headline={post.headline}
                subtitle={post.subtitle}
                cover={post.cover}
                type={post.type}
                author={post.author}
                date={post.date}
                id={post.key}
              />
            )}
          {this.state.posts.length === 0 &&
            <Header style={{ color: "#DCDCDC" }}>
              Still working on a post!
            </Header>}
        </Blogs>
      </div>
    );
  }
}

const Blogs = styled.div`
  display: flex;
  padding: 40px;
  flex-flow: row wrap;
  justify-content: center;
`;

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
