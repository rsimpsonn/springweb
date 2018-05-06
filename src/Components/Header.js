import React, { Component } from "react";
import styled from "styled-components";

export default class Head extends Component {
  render() {
    return (
      <MainView full={this.props.full}>
        <img
          onClick={() => (window.location.href = "/")}
          src={
            this.props.full
              ? require("../Images/logo-blue.svg")
              : require("../Images/logo-white.svg")
          }
          style={{ height: 60, width: "auto", cursor: "pointer" }}
        />
        <MainText
          full={this.props.full}
          onClick={() => (window.location.href = "/blog")}
        >
          BLOG
        </MainText>
      </MainView>
    );
  }
}

const MainView = styled.div`
  background-color: #7F85FF;
  display: flex;
  align-items: center;
  padding: 25px;
  position: absolute;
  ${props =>
    props.full &&
    `
    background-color: #fff;`}
`;

const MainText = styled.p`
  font-family: Montserrat, sans-serif;
  font-weight: 200;
  color: #fff;
  font-size: 18px;
  margin-left: 30px;
  cursor: pointer;

  ${props =>
    props.full &&
    `
color: #7F85FF`}

  &:hover {
    opacity: 0.6;
  }
`;
