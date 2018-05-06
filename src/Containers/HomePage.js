import React, { Component } from "react";
import styled from "styled-components";
import firebase from "firebase";
import * as Typicons from "react-icons/lib/ti";
import * as FontAwesome from "react-icons/lib/fa";
import ApplyBox from "../Components/ApplyBox";
import MediaQuery from "react-responsive";
import Slider from "react-slick";
import Head from "../Components/Header";

require("firebase/firestore");

export default class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 250,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false
    };
    return (
      <Column>
        <MediaQuery query="(min-device-width: 1224px)">
          <Head full={false} />
        </MediaQuery>
        <MainView>
          <MediaQuery query="(min-device-width: 1224px)">
            <SubText style={{ fontWeight: 200 }}>Welcome to</SubText>
            <Row>
              <img
                src={require("../Images/logo-white.svg")}
                style={{
                  width: this.state.width / 8,
                  height: "auto",
                  margin: 40,
                  marginLeft: 0
                }}
              />
              <MainText
                style={{ fontWeight: 200 }}
                size={this.state.width / 6.4}
              >
                spring
              </MainText>
            </Row>
            <SubText style={{ fontWeight: 200 }}>
              Software designed and developed by high school students
            </SubText>
          </MediaQuery>
          <MediaQuery query="(max-device-width: 1224px)">
            <SubText>Welcome to</SubText>
            <Row style={{ flexDirection: "column" }}>
              <MainText style={{ fontWeight: 200 }} size={80}>spring</MainText>
              <img
                src={require("../Images/logo-white.svg")}
                style={{
                  width: 80,
                  height: "auto",
                  margin: 40
                }}
              />
            </Row>
            <SubText>
              Software designed and developed by high school students
            </SubText>
          </MediaQuery>
        </MainView>
        <MediaQuery query="(min-width: 1224px)">
          <Row>
            <img
              src={require("../Images/illustration.png")}
              style={{ width: "30%", height: "auto", margin: "5%" }}
            />
            <Col>
              <Header>High school students,</Header>
              <Paragraph>
                Experienced in code or design? There seems to be a lot of us. We
                are
                past the "educational" and "introductory" courses, but without a
                degree, there isn&#39;t much more we can do.
              </Paragraph>
              <Paragraph>
                But we don’t understand that. As high school students, we
                believe
                that right now, we are reaching peak levels of{" "}
                <span
                  style={{
                    fontFamily: "Avenir-Medium",
                    padding: "2px"
                  }}
                >
                  hope
                </span>{" "}
                and{" "}
                <span
                  style={{
                    fontFamily: "Avenir-Medium",
                    padding: "2px"
                  }}
                >
                  creativity.
                </span>{" "}
              </Paragraph>
            </Col>
          </Row>
        </MediaQuery>
        <MediaQuery query="(max-width: 1224px)">
          <Row style={{ flexDirection: "column" }}>
            <Col style={{ padding: 10 }}>
              <Header>High school students,</Header>
              <Paragraph style={{ width: "90%" }}>
                Experienced in code or design? There seems to be a lot of us. We
                are
                past the "educational" and "introductory" courses, but without a
                degree, there isn&#39;t much more we can do.
              </Paragraph>
              <Paragraph style={{ width: "90%" }}>
                But we don’t understand that. As high school students, we
                believe
                that right now, we are reaching peak levels of{" "}
                <span
                  style={{
                    fontFamily: "Avenir-Medium",
                    padding: "2px"
                  }}
                >
                  hope
                </span>{" "}
                and{" "}
                <span
                  style={{
                    fontFamily: "Avenir-Medium",
                    padding: "2px"
                  }}
                >
                  creativity.
                </span>{" "}
              </Paragraph>
            </Col>
            <img
              src={require("../Images/illustration.png")}
              style={{ width: "60%", height: "auto", margin: "10%" }}
            />
          </Row>
        </MediaQuery>
        <MediaQuery query="(min-width: 1224px)">
          <SecView>
            <Col style={{ padding: 0, width: "25%", margin: 40 }}>
              <Typicons.TiLightbulb
                style={{ width: 50, height: "auto", margin: 10 }}
              />
              <SecHeader>What</SecHeader>
              <SecText>
                We want to design and develop innovative products and
                experiences
                through a network of remote high school students. The team will
                be
                permanently led and run by a dedicated team of students.{" "}
              </SecText>
            </Col>
            <Col style={{ padding: 0, width: "25%", margin: 40 }}>
              <Typicons.TiCalendar
                style={{ width: 50, height: "auto", margin: 10 }}
              />
              <SecHeader>When</SecHeader>
              <SecText>
                We want to assemble a team of students by the beginning of
                Summer
                2018. Once the summer begins, we will open a Slack page and
                start
                our development process.{" "}
              </SecText>
            </Col>
            <Col style={{ padding: 0, width: "25%", margin: 40 }}>
              <Typicons.TiCode
                style={{ width: 50, height: "auto", margin: 10 }}
              />
              <SecHeader>How</SecHeader>
              <SecText>
                For the coming summer, we prefer to use React and React Native
                for
                any application development. However, if the group wants to head
                in a different direction, we’re open to using other frameworks.{
                  " "
                }
              </SecText>
            </Col>
          </SecView>
        </MediaQuery>
        <MediaQuery query="(max-width: 1224px)">
          <SecView>
            <Col style={{ padding: 10 }}>
              <Col style={{ padding: 0, width: "90%", margin: 10 }}>
                <Typicons.TiLightbulb
                  style={{ width: 50, height: "auto", margin: 10 }}
                />
                <SecHeader>What</SecHeader>
                <SecText>
                  We want to design and develop innovative products and
                  experiences
                  through a network of remote high school students. The team
                  will
                  be
                  permanently led and run by a dedicated team of students.{" "}
                </SecText>
              </Col>
              <Col style={{ padding: 0, width: "90%", margin: 10 }}>
                <Typicons.TiCalendar style={{ width: 50, height: "auto" }} />
                <SecHeader>When</SecHeader>
                <SecText>
                  We want to assemble a team of students by the beginning of
                  Summer
                  2018. Once the summer begins, we will open a Slack page and
                  start
                  our development process.{" "}
                </SecText>
              </Col>
              <Col style={{ padding: 0, width: "90%", margin: 10 }}>
                <Typicons.TiCode
                  style={{ width: 50, height: "auto", margin: 10 }}
                />
                <SecHeader>How</SecHeader>
                <SecText>
                  For the coming summer, we prefer to use React and React Native
                  for
                  any application development. However, if the group wants to
                  head
                  in a different direction, we’re open to using other
                  frameworks.{" "}
                </SecText>
              </Col>
            </Col>
          </SecView>
        </MediaQuery>
        <MediaQuery query="(min-width: 1224px)">
          <MainView style={{ padding: 0, paddingTop: 40 }}>
            <SubText style={{ fontWeight: 200 }}>
              Our Development Process
            </SubText>
            <Row style={{ justifyContent: "center", alignItems: "flex-start" }}>
              <Col style={{ width: "25%" }}>
                <div
                  style={{
                    width: 200,
                    height: 200,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <img
                    src={require("../Images/rocket.svg")}
                    style={{
                      width: 80,
                      height: "auto",
                      transform: "rotate(45deg)"
                    }}
                  />
                </div>
                <SubText style={{ fontSize: 20, fontWeight: 300 }}>
                  Once we have formed our group, we will spend a few weeks
                  deciding on the projects we want to work on. We will vote on
                  ideas
                  and carry out 2-3 full projects.
                </SubText>
              </Col>
              <Col style={{ width: "25%" }}>
                <div
                  style={{
                    width: 200,
                    height: 200,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <div>
                    <Row>
                      <FontAwesome.FaSlack
                        color="#fff"
                        style={{
                          opacity: 0.85,
                          width: 100,
                          height: "auto",
                          margin: 10
                        }}
                      />
                      <FontAwesome.FaGithub
                        color="#fff"
                        style={{
                          opacity: 0.85,
                          width: 100,
                          height: "auto",
                          margin: 10
                        }}
                      />
                    </Row>
                  </div>
                </div>
                <SubText style={{ fontSize: 20, fontWeight: 300 }}>
                  Using Slack, GitHub, and other project management tools,
                  we&#39;ll design, develop, market, and distribute the projects
                  we vote on.
                </SubText>
              </Col>
              <Col style={{ width: "25%" }}>
                <div
                  style={{
                    width: 200,
                    height: 200,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <img
                    src={require("../Images/dollar.svg")}
                    style={{ width: 200, height: "auto" }}
                  />
                </div>
                <SubText style={{ fontSize: 20, fontWeight: 300 }}>
                  We can pitch our ideas to investors or sponsors to secure
                  necessary funding for projects or to expand the Spring
                  network.
                </SubText>
              </Col>
            </Row>
            <Row style={{ justifyContent: "center", alignItems: "flex-start" }}>
              <Col style={{ width: "25%" }}>
                <div
                  style={{
                    width: 200,
                    height: 200,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <img
                    src={require("../Images/equity.svg")}
                    style={{ width: 200, height: "auto" }}
                  />
                </div>
                <SubText style={{ fontSize: 20, fontWeight: 300 }}>
                  Equity in Spring Group will
                  be distributed to members proportionately to effort in
                  projects.
                  In June of next year, we&#39;ll review project contributions
                  and
                  decide on fair equity.
                </SubText>
              </Col>
              <Col style={{ width: "25%" }}>
                <div
                  style={{
                    width: 200,
                    height: 200,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <img
                    src={require("../Images/finish.svg")}
                    style={{ width: 240, height: "auto" }}
                  />
                </div>
                <SubText style={{ fontSize: 20, fontWeight: 300 }}>
                  Before the
                  beginning of next summer, members will vote on a new CEO, the
                  team will
                  carry out applications, and the Spring process will start all
                  over!
                </SubText>
              </Col>
              <Col style={{ width: "25%" }}>
                <div
                  style={{
                    width: 200,
                    height: 200,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <img
                    src={require("../Images/logo-white.svg")}
                    style={{ width: "auto", height: 150 }}
                  />
                </div>
                <SubText style={{ fontSize: 20, fontWeight: 300 }}>
                  After Spring members graduate from high school, they will join
                  the
                  Spring Alumni network. At the end of every year, the Spring
                  team
                  will vote on whether or not to keep projects, or to pass
                  developed
                  projects to Alumni management. Additionally, the Alumni
                  network
                  will mentor the Spring team.
                </SubText>
              </Col>
            </Row>
          </MainView>
        </MediaQuery>
        <MediaQuery query="(max-width: 1224px)">
          <Column
            style={{
              backgroundColor: "#7F85FF",
              paddingTop: 40,
              paddingBottom: 40
            }}
          >
            <SubText>Our Development Process</SubText>
            <Slider {...settings}>
              <div>
                <Col
                  style={{
                    width: "80%",
                    padding: 0,
                    marginLeft: "auto",
                    marginRight: "auto"
                  }}
                >
                  <div
                    style={{
                      width: 200,
                      height: 200,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center"
                    }}
                  >
                    <img
                      src={require("../Images/rocket.svg")}
                      style={{
                        width: 80,
                        height: "auto",
                        transform: "rotate(45deg)"
                      }}
                    />
                  </div>
                  <SubText style={{ fontSize: 20 }}>
                    Once we have formed our group, we will spend a few weeks
                    deciding on the projects we want to work on. We will vote on
                    ideas
                    and carry out 2-3 full projects.
                  </SubText>
                </Col>
              </div>
              <div style={{ marginLeft: "auto", marginRight: "auto" }}>
                <Col
                  style={{
                    width: "80%",
                    padding: 0,
                    marginLeft: "auto",
                    marginRight: "auto"
                  }}
                >
                  <div
                    style={{
                      width: 200,
                      height: 200,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center"
                    }}
                  >
                    <div>
                      <Row>
                        <FontAwesome.FaSlack
                          color="#fff"
                          style={{
                            opacity: 0.85,
                            width: 100,
                            height: "auto",
                            margin: 10
                          }}
                        />
                        <FontAwesome.FaGithub
                          color="#fff"
                          style={{
                            opacity: 0.85,
                            width: 100,
                            height: "auto",
                            margin: 10
                          }}
                        />
                      </Row>
                    </div>
                  </div>
                  <SubText style={{ fontSize: 20 }}>
                    Using Slack, GitHub, and other project management tools,
                    we&#39;ll design, develop, market, and distribute the
                    projects
                    we vote on.
                  </SubText>
                </Col>
              </div>
              <div style={{ marginLeft: "auto", marginRight: "auto" }}>
                <Col
                  style={{
                    width: "80%",
                    padding: 0,
                    marginLeft: "auto",
                    marginRight: "auto"
                  }}
                >
                  <div
                    style={{
                      width: 200,
                      height: 200,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center"
                    }}
                  >
                    <img
                      src={require("../Images/dollar.svg")}
                      style={{ width: 200, height: "auto" }}
                    />
                  </div>
                  <SubText style={{ fontSize: 20 }}>
                    We can pitch our ideas to investors or sponsors to secure
                    necessary funding for projects or to expand the Spring
                    network.
                  </SubText>
                </Col>
              </div>
              <div style={{ marginLeft: "auto", marginRight: "auto" }}>
                <Col
                  style={{
                    width: "80%",
                    padding: 0,
                    marginLeft: "auto",
                    marginRight: "auto"
                  }}
                >
                  <div
                    style={{
                      width: 200,
                      height: 200,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center"
                    }}
                  >
                    <img
                      src={require("../Images/equity.svg")}
                      style={{ width: 200, height: "auto" }}
                    />
                  </div>
                  <SubText style={{ fontSize: 20 }}>
                    Equity in Spring Group will
                    be distributed to members proportionately to effort in
                    projects.
                    In June of next year, we&#39;ll review project contributions
                    and
                    decide on fair equity.
                  </SubText>
                </Col>
              </div>
              <div style={{ marginLeft: "auto", marginRight: "auto" }}>
                <Col
                  style={{
                    width: "80%",
                    padding: 0,
                    marginLeft: "auto",
                    marginRight: "auto"
                  }}
                >
                  <div
                    style={{
                      width: 200,
                      height: 200,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center"
                    }}
                  >
                    <img
                      src={require("../Images/finish.svg")}
                      style={{ width: 240, height: "auto" }}
                    />
                  </div>
                  <SubText style={{ fontSize: 20 }}>
                    Before the
                    beginning of next summer, members will vote on a new CEO,
                    the
                    team will
                    carry out applications, and the Spring process will start
                    all
                    over!
                  </SubText>
                </Col>
              </div>
              <div style={{ marginLeft: "auto", marginRight: "auto" }}>
                <Col
                  style={{
                    width: "80%",
                    padding: 0,
                    marginLeft: "auto",
                    marginRight: "auto"
                  }}
                >
                  <div
                    style={{
                      width: 200,
                      height: 200,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center"
                    }}
                  >
                    <img
                      src={require("../Images/logo-white.svg")}
                      style={{ width: "auto", height: 150 }}
                    />
                  </div>
                  <SubText style={{ fontSize: 20 }}>
                    After Spring members graduate from high school, they will
                    join
                    the
                    Spring Alumni network. The Alumni
                    network
                    will mentor the Spring team and help manage developed
                    projects.
                  </SubText>
                </Col>
              </div>
            </Slider>
          </Column>
        </MediaQuery>
        <ApplyBox />
      </Column>
    );
  }
}

//&#39;

const MainView = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #7F85FF;
  flex-direction: column;
  padding-top: 5%;
  padding-bottom: 5%;
  padding-left: 15%;
  padding-right: 15%;
`;

const MainText = styled.p`
  font-family: Montserrat, sans-serif;
  font-weight: 100;
  color: #fff;
  margin: 0;

  ${props => `
      font-size: ${props.size}px;`}
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  min-width: 0;
  min-height: 0;
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  margin: 0;
`;

const SubText = styled.p`
  font-family: Montserrat, sans-serif;
  font-weight: 400;
  font-size: 24px;
  color: #fff;
  text-align: center;
  border: 1px #fff;
`;

const Header = styled.p`
  font-family: Avenir-Black, sans-serif;
  font-size: 40px;
  margin-bottom: 10px;
  text-align: center;
`;

const Paragraph = styled.p`
  font-family: Avenir-Light, sans-serif;
  font-size: 22px;
  width: 90%;
`;

const SecView = styled.div`
  background-color: #fafafa;
  display: flex;
  justify-content: center;
`;

const SecHeader = styled.p`
  font-family: Avenir-Black, sans-serif;
  font-size: 40px;
  margin-bottom: 10px;
  margin-top: 10px;
`;

const SecText = styled.p`
  font-family: Avenir-Light, sans-serif;
  font-size: 24px;
  margin-bottom: 10px;
  width: 100%;
  text-align: center;
`;
