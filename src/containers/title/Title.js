import React from "react";
import styled from "styled-components";

const TitleContainer = styled.div`
  /* Section / Subtitle */
  /* font-family: Inter; */
  margin-bottom: ${({ sub }) => (sub ? "20px" : "16px")};
  font-style: normal;
  font-weight: bold;
  font-size: ${({ sub }) => (sub ? "42px" : "15px")};
  line-height: 140%;
  /* identical to box height, or 21px */
  letter-spacing: ${({ sub }) => (sub ? "-0.02em" : "0.6em")};
  text-transform: ${({ sub }) => (sub ? "none" : "uppercase")};
  /* Primary Blue */
  color: ${({ sub }) => (sub ? "#262B35" : "#1c57c9")};
`;

/* Section / Title */
// border: ${({ white }) => (white ? "none" : "1px solid #ffffff")};

// font-family: Inter;
// font-style: normal;
// font-weight: bold;
// font-size: 42px;
// line-height: 140%;
// /* identical to box height, or 59px */

// letter-spacing: -0.02em;

// /* Solid Black */

// color: #262B35;

export default function Title(props) {
  return <TitleContainer {...props}>{props.children}</TitleContainer>;
}
