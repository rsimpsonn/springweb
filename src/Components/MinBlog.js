import React, { Component } from "react";
import styled from "styled-components";

export default class MinBlog extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.id);
    return (
      <MainView
        onClick={() => (window.location.href = `/posts/${this.props.id}`)}
      >
        <img src={this.props.cover} style={{ width: "100%", height: "auto" }} />
        <div style={{ padding: 15 }}>
          <Type>{this.props.type}</Type>
          <Headline>{this.props.headline}</Headline>
          <SubTitle>{this.props.subtitle}</SubTitle>
        </div>
      </MainView>
    );
  }
}

const MainView = styled.div`
  border-radius: 6px;
  width: 360px;
  box-shadow: 0px 0px 25px #dcdcdc;
  background-color: #fff;
  cursor: pointer;
  overflow: hidden;
  margin: 20px;
`;

const Headline = styled.p`
  font-family: Avenir-Heavy, sans-serif;
  color: #484848;
  font-size: 40px;
  margin: 0px;
`;

const SubTitle = styled.p`
  font-family: Avenir-Heavy, sans-serif;
  color: #dcdcdc;
  font-size: 22px;
`;

const Type = styled.p`
  font-family: Avenir-Roman: sans-serif;
  color: #7F85FF;
  letter-spacing: 1px;
  font-size: 14px;
  text-transform: uppercase;
`;
