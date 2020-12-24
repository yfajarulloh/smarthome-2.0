import React from "react";
import styled from "styled-components";

const ButtonContainer = styled.div`
  width: 272px;
  height: 44px;
  left: 119px;
  top: 64px;
`;

const ButtonDetails = styled.button`
  width: 128px;
  height: 44px;
  /* Button / Primary */
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 18px;
  text-align: center;
  /* Pure White */
  color: #ffffff;
  border: ${({ white }) => (white ? "none" : "1px solid #ffffff")};
  background-color: ${({white}) => (white? "#1ECE7A" : "transparent")};
  margin-left: ${({white}) => (white? "0px" : "16px")};
  display: inline;
  transition: all 220ms ease-in-out;
  cursor: pointer;
  &:hover {
    background-color: ${({ white }) => (white ? "transparent" : "#1ECE7A")};
    border:${({ white }) => (white ? "1.2px solid #1ece7a" : "1px solid #ffffff")}; ;
  }
`;

export default function Button() {
  return <div>
    <ButtonContainer>
      <ButtonDetails white>
        Get Started
      </ButtonDetails>
      <ButtonDetails>
        Learn More
      </ButtonDetails>
    </ButtonContainer>
  </div>;
}
