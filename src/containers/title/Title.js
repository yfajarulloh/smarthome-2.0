import React from "react";
import styled from "styled-components";

const TitleContainer = styled.div`
  margin-bottom: ${({ sub }) => (sub ? "20px" : "16px")};
  font-style: normal;
  font-weight: bold;
  font-size: ${({ sub }) => (sub ? "42px" : "15px")};
  line-height: 140%;
  letter-spacing: ${({ sub }) => (sub ? "-0.02em" : "0.6em")};
  text-transform: ${({ sub }) => (sub ? "none" : "uppercase")};
  color: ${({ sub }) => (sub ? "#262B35" : "#1c57c9")};
`;


export default function Title(props) {
  return <TitleContainer {...props}>{props.children}</TitleContainer>;
}
