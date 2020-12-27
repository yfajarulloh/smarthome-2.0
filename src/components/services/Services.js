import React, { Component } from "react";
import styled from "styled-components";
import Title from "../../containers/title/Title";
import HomeImg from "../../assets/images/home.png";
import IconImg from "../../assets/images/service_icon.png";

const ServicesContainer = styled.div`
  padding-inline-start: 20%;
  /* background-color: blue; */
  margin-bottom: 100px;
  /* display: flex; */
  /* align-items: center; */
`;
const ContentHomeContainer = styled.div`
  width: 1120px;
  height: 1290px;
`;

const ContentTitle = styled.p`
  /* width: 146px; */
  /* height: 21px; */
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 140%;
  /* identical to box height, or 21px */
  align-items: center;
  text-align: center;
  letter-spacing: 0.6em;
  text-transform: uppercase;
  /* rimary Blue */
  /* color: #1c57c9; */
  color: #1c57c9;
  /* margin-left:100px;  */
`;

const ContainerDescription = styled.div`
  font-family: Inter;
  font-style: normal;
  text-align: center;
  margin-top: 16px;
  margin-bottom: 24px;
  align-items: center;
  font-weight: bold;
  font-size: 42px;
  line-height: 140%;
  /* identical to box height, or 59px */
  letter-spacing: -0.02em;
  /* Solid Black */
  color: #262b35;
`;

const ContainerDetails = styled.div`
  font-family: Inter;
  font-style: normal;
  text-align: center;
  align-items: center;
  font-weight: normal;
  font-size: 18px;
  line-height: 160%;
  /* identical to box height, or 29px */
  text-align: center;
  /* Gray */
  color: #606c84;
  margin-bottom: 93px;
`;

const ImageContainer = styled.img`
  width: 674px;
  height: 600px;
  /* margin-left:50%; */
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 120px;
`;

const CardContainter = styled.div`
  width: 360px;
  height: 96px;
  margin-left:10px;
  /* text-align:center; */
/* align-items:center; */
  float: left;
  display: flex;
  flex-direction: row;
`;

const CardDescription = styled.div`
  padding-top: 22px;
  padding-bottom: 26px;
  padding-right: 98px;
  /* padding-left:103px; */
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  color: #262b35;
`;

const CardImage = styled.img`
  padding-left: 24px;
  padding-top: 20.5px;
  padding-right: 30px;
  width: 55px;
  height: 55px;
`;
const featureServiceData = { title: "features" };

export default class Services extends Component {
  render() {
    return (
      <div>
        <ServicesContainer>
          <ContentHomeContainer>
            <ContentTitle>SERVICES</ContentTitle>
            {/* {this.props.title.featureServiceData.title} */}
            <ContainerDescription>
              Bring more systems into the network
            </ContainerDescription>
            <ContainerDetails>
              Find out just how far Siphome can lead your home into next-gen
              intelligence.
            </ContainerDetails>
            <ImageContainer src={HomeImg} alt="Home Imgae" />
            <CardContainter>
              <CardImage src={IconImg} />
              <CardDescription>Mobile Command Component</CardDescription>
            </CardContainter>
            <CardContainter>
              <CardImage src={IconImg} />
              <CardDescription>Mobile Command Component</CardDescription>
            </CardContainter>
            <CardContainter>
              <CardImage src={IconImg} />
              <CardDescription>Mobile Command Component</CardDescription>
            </CardContainter>
            <CardContainter>
              <CardImage src={IconImg} />
              <CardDescription>Mobile Command Component</CardDescription>
            </CardContainter>
            <CardContainter>
              <CardImage src={IconImg} />
              <CardDescription>Mobile Command Component</CardDescription>
            </CardContainter>
            <CardContainter>
              <CardImage src={IconImg} />
              <CardDescription>Mobile Command Component</CardDescription>
            </CardContainter>
            <CardContainter>
              <CardImage src={IconImg} />
              <CardDescription>Mobile Command Component</CardDescription>
            </CardContainter>
            <CardContainter>
              <CardImage src={IconImg} />
              <CardDescription>Mobile Command Component</CardDescription>
            </CardContainter>
            <CardContainter>
              <CardImage src={IconImg} />
              <CardDescription>Mobile Command Component</CardDescription>
            </CardContainter>
          </ContentHomeContainer>
        </ServicesContainer>
      </div>
    );
  }
}
