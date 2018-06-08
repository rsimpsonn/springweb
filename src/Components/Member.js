import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Member = member => {
  console.log(member.member.picture);
  return (
    <a href={member.member.url} target="_blank">
      <Background url={member.member.picture} />
    </a>
  );
};

export default Member;

const Background = styled.div`
  background-size: 100% auto;
  overflow: hidden;
  width: 200px;
  height: 200px;
  cursor: pointer;
  margin: 15px 7.5px 0;

  ${props => `
      background-image: url(${props.url});
  `}
`;
