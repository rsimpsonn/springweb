import React, { Component } from "react";
import styled from "styled-components";
import firebase from "firebase";
import moment from "moment";
import MediaQuery from "react-responsive";
require("firebase/firestore");

export default class ApplyBox extends Component {
  constructor(props) {
    super(props);

    this.db = firebase.firestore();

    this.state = {
      success: false,
      grade: 8
    };

    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  submit() {
    this.db
      .collection("responses")
      .add({
        at: moment().format("MMMM Do, h:mm:ss a"),
        name: this.state.name,
        email: this.state.email,
        grade: this.state.grade,
        experience: this.state.experience,
        interest: this.state.interest
      })
      .then(() => this.setState({ success: true }));
  }

  render() {
    return (
      <div>
        {!this.state.success &&
          <MainView>
            <MainText>Join the Spring team!</MainText>
            <Question>Name</Question>
            <MediaQuery query="(min-device-width: 1224px)">
              <Email name="name" onChange={this.handleChange} width="15%" />
            </MediaQuery>
            <MediaQuery query="(max-device-width: 1224px)">
              <Email name="name" onChange={this.handleChange} width="60%" />
            </MediaQuery>
            <Question>Email</Question>
            <MediaQuery query="(min-device-width: 1224px)">
              <Email name="email" onChange={this.handleChange} width="15%" />
            </MediaQuery>
            <MediaQuery query="(max-device-width: 1224px)">
              <Email name="email" onChange={this.handleChange} width="60%" />
            </MediaQuery>
            <Question>Grade</Question>
            <select name="grade" onChange={this.handleChange}>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
            </select>
            <Question>
              What previous experience do you have with design and development?
            </Question>
            <Input name="experience" onChange={this.handleChange} />
            <Question>
              How do you want to contribute to the Spring team?
            </Question>
            <Input name="interest" onChange={this.handleChange} />
            <Submit onClick={this.submit} type="submit">Submit</Submit>
          </MainView>}
        {this.state.success &&
          <MainView style={{ padding: 50 }}>
            <Question style={{ width: "60%" }}>
              Thank you for applying to be a part of Spring&#39;s inaugural
              year.
            </Question>
            <Question
              style={{
                width: "60%",
                fontFamily: "Avenir-Light"
              }}
            >
              We will send you an email before summer to notify you about
              your spot on the team. In the meantime, you can email me at
              ryan@springgroup.io if you have any questions or want to start
              talking about projects.
            </Question>
            <img
              src={require("../Images/logo-gray.svg")}
              style={{
                width: 120,
                height: "auto",
                margin: 20,
                fill: "#DCDCDC"
              }}
            />
          </MainView>}
      </div>
    );
  }
}

const MainView = styled.form`
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const MainText = styled.p`
  font-family: Avenir-Black, sans-serif;
  font-size: 40px;
  margin-bottom: 15px;
  text-align: center;
  width: 80%;
`;

const Question = styled.p`
  font-family: Avenir-Light, sans-serif;
  font-size: 20px;
  text-align: center;
  width: 90%;
`;

const Input = styled.textarea`
  border-radius: 6px;
  height: 100px;
  width: 60%;
  padding: 10px;
  border-color: #dcdcdc;
  resize: none;
  outline: none;
  box-shadow: none;
  border: 1px solid #dcdcdc;
  &:focus {
      outline: none;
    }
`;

const Email = styled.input`
  text-align: center;
  padding: 10px;
  border: 1px solid #dcdcdc;
  &:focus {
      outline: none;
    }

    ${props => `
        width: ${props.width}`}
`;

const Submit = styled.p`
  font-family: Avenir-Heavy, sans-serif;
  background-color: #7F85FF;
  border-radius: 6px;
  color: #fff;
  font-size: 16px;
  user-select: none;
  &:active {
    transform: scale(0.96)
  }
  padding: 12px;
  padding-left: 20px;
  padding-right: 20px;
  margin: 50px;
  cursor: pointer;
`;
