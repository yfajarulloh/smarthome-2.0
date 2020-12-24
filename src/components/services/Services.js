import React, { Component } from "react";
import styled from "styled-components";
import Title from "../../containers/title/Title";

const ServicesContainer = styled.div`
  width: 1295px;
  height: 2460px;
    margin-inline-start: 385px;
  background-color: blue;
  display: flex;
  align-items: center;
  /* background: linear-gradient(180deg, rgba(255, 255, 255, 0) -9.97%, #ECF0F7 100%); */
`;
const ContentHomeContainer = styled.div`
  width: 1120px;
  height: 1290px;
`;

const ContentTitle = styled.p`
  width: 146px;
  height: 21px;
  /* Section / Subtitle */
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 140%;
  /* identical to box height, or 21px */
align-items:center;
  text-align: center;
  letter-spacing: 0.6em;
  text-transform: uppercase;
  /* rimary Blue */
  /* color: #1c57c9; */
  color:black;
  /* margin-left:100px;  */
`;

const featureServiceData = { title: "features" };

export default class Services extends Component {
  render() {
    return (
      <div>
        <ServicesContainer>
          <ContentHomeContainer>
            <ContentTitle>
            testtesttesttesttesttesttesttesttesttesttesttesttesttest
            </ContentTitle>
              {/* {this.props.title.featureServiceData.title} */}
          </ContentHomeContainer>
        </ServicesContainer>
      </div>
    );
  }
}
