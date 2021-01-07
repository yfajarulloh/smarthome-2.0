import React, { Component } from "react";
import styled from "styled-components";
import backgroundImage from "../../assets/images/hero-imagessss.png";
import backgroundImageMobile from "../../assets/images/background-blue-mobile.png";
import Button from "../../containers/button/button";
import Navbar from "../../containers/navbar/navbar";
import TitleDescription from "../../containers/title/TitleDescription";

const TopSection = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  padding-inline-start: 190px;
  margin-top: 0;
  display: flex;

  @media screen and (max-width: 480px) {
    background-image: url(${backgroundImageMobile});
    padding-inline-start: 20px;
  }
`;

const ContainerBody = styled.div`
  width: 700px;
  height: 555px;
`;

const ContainerTitle = styled.p`
  width: 550px;
  font-style: normal;
  font-weight: bold;
  font-size: 55px;
  line-height: 72px;
  /* or 131% */
  letter-spacing: -0.02em;
  color: white;
  height: 204px;
  margin-top: 96px;
  color: #ffffff;
  @media screen and (max-width: 480px) {
    width: 335px;
    font-size: 42px;
    line-height: 140%;
    text-align: center;
    margin-bottom:18px;
  }
`;

const ContainerDetails = styled.p`
  width: 560px;
  height: 196px;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 160%;
  color: #ffffff;
  margin-top: 36px;
`;

const ButtonContainerHome = styled.div`
  display: flex;
  flex-direction: row;
`;

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data:
        "Turn your home into a smarthome today with a simple & affordable upgrade. Discover the upgrade that automates home maintenance.",
    };
  }
  render() {
    return (
      <div>
        <TopSection>
          <ContainerBody>
            <Navbar />
            <ContainerTitle>
              Imagine your
              <br /> home smart enough
              <span style={{ color: "#1ECE7A" }}> to take care</span> of itself.
            </ContainerTitle>
            {/* <TitleDescription home /> */}
            <TitleDescription dataFromParent={this.state.data} home />
            <ButtonContainerHome>
              <Button white>Home</Button>
              <Button>Smart</Button>
            </ButtonContainerHome>
          </ContainerBody>
        </TopSection>
      </div>
    );
  }
}
