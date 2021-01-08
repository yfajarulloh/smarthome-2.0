import React from "react";
import styled from "styled-components";
import LogoImg from "../../assets/images/logoshape.png";
import Button from "../button/button";

const NavbarContainer = styled.div`
  width: 1600px;
  height: 74px;
  display: flex;
  padding-top: 20px;
  /* background-color:red; */
  align-items: center;
`;

const LogoContainer = styled.img`
  width: 42px;
  height: 42px;
  cursor: pointer;
`;

const TextContainer = styled.h3`
  width: 113px;
  height: 24px;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 27px;
  color: white;
  padding-left: 12px;
  padding-right: 96px;
  cursor: pointer;
  &:hover {
    color: #1ece7a;
  }
  @media screen and (max-width: 480px) {
    padding-right: 10px;
  }
`;

const TextNavbar = styled.p`
  /* width: 421px; */
  height: 16px;
  padding-left: 50px;
  float: left;
  color: white;
  font-size: 17px;
  cursor: pointer;
  &:hover {
    color: #1ece7a;
  }
  @media screen and (max-width: 480px) {
    display: none;
  }
`;



const TextNavbarRight = styled.p`
  width: 180px;
  height: 16px;
  font-weight: bold;
  /* font-size: 16px; */
  text-align: center;
  float: right;
  cursor: pointer;

  @media screen and (max-width: 480px) {
    display: none;
  }
`;

const ButtonContainer = styled.div`
  @media screen and (min-width: 480px) {
    display: none;
  }
`;


// window.scroll()


export default function Navbar() {
  return (
    <div>
      <NavbarContainer>
        <LogoContainer src={LogoImg} />
        <TextContainer>Siphome</TextContainer>
        <ButtonContainer>
          {" "}
          <Button>Menu</Button>
        </ButtonContainer>
        <TextNavbar>Home</TextNavbar>
        <TextNavbar>Feature</TextNavbar>
        <TextNavbar>Service</TextNavbar>
        <TextNavbar>Contact</TextNavbar>
        <TextNavbar>FAQ</TextNavbar>
        <TextNavbarRight style={{ paddingLeft: "450px" }}>
          Sign In
        </TextNavbarRight>
        <TextNavbarRight
          style={{
            // marginLeft: "",
            borderLeft: "2px solid #1ece7a",
            color: "rgba(30, 206, 122, 1)",
          }}
        >
          Get Started
        </TextNavbarRight>
      </NavbarContainer>
    </div>
  );
}
