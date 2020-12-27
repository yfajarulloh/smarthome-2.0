import React, { Component } from "react";
import styled from "styled-components";
import backgroundImage from "../../assets/images/hero-imagessss.png";
import Button from "../../containers/button/button";
import Navbar from "../../containers/navbar/navbar";
import Title from "../../containers/title/Title";
import TitleDescription from "../../containers/title/TitleDescription";

const TopSection = styled.div`
  /* width: 100%; */
  height: 100vh;
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  padding-inline-start: 190px;
  margin-top: 0;
  display: flex;
`;

const ContainerBody = styled.div`
  width: 700px;
  height: 555px;
`;

const ContainerTitle = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 55px;
  line-height: 72px;
  /* or 131% */
  letter-spacing: -0.02em;
  color: white;
  width: 600px;
  height: 204px;
  margin-top: 96px;
  color: #ffffff;
`;

const ContainerDetails = styled.p`
  width: 560px;
  height: 196px;
  /* Hero / Paragraph */
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 160%;
  /* or 32px */
  /* Pure White */
  color: #ffffff;
  margin-top: 36px;
`;

const ButtonContainerHome = styled.div`
  /* margin-left: ${({white}) => (white? "0px" : "16px")}; */
  display: flex;
  flex-direction: row;
`;

export default class Home extends Component {
  constructor(props) {
    super(props);
    // this.state = {date: new Date()};
    this.state = {
      title: "Imagine your",
      secondTitle: "home smart enough",
    };
  }

  render() {
    return (
      <div>
        <TopSection>
          <ContainerBody>
            <Navbar />
            <ContainerTitle>
              <Title title={this.state.title} />
              <Title title={this.state.secondTitle} />
              <span style={{ color: "rgba(30, 206, 122, 1)" }}>
                to take
              </span>{" "}
              care of itself.
            </ContainerTitle>
            {/* <ContainerDetails>
              Turn your home into a smarthome today with a simple & affordable
              upgrade. Discover the upgrade that automates home maintenance.
            </ContainerDetails> */}
            <TitleDescription home />
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
