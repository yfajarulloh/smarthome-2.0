import React, { Component } from "react";
import styled from "styled-components";
import updateImg from "../../assets/images/update_img.png";
import dotImg from "../../assets/images/update_img.png";
import backgroundImg from "../../assets/images/background-blue.png";
import img1 from "../../assets/images/update1.png";
import img2 from "../../assets/images/update2.png";
import img3 from "../../assets/images/update3.png";
import img4 from "../../assets/images/update4.png";
import UpdateData from "../../containers/updateData/UpdateData";
import Title from "../../containers/title/Title";

const UpdateContainer = styled.div`
  padding-inline-start: 15%;
  margin-top: 100px;
  margin-bottom: 100px;
  height: 1170px;
`;

const ImageContainer = styled.img`
  width: 60%;
`;
const BackgroundImage = styled.div`
  background-image: url(${backgroundImg});
  background-repeat: no-repeat;
  /* float: right; */
  /* width: 85%; */
  width:1400px;
  height: 150vh;
  margin-right: 150px;
`;

const ContainerData = styled.div`
  /* width: 440px; */
  /* height: 1044px; */
  /* background-color:red; */
  float: right;
  display: flex;
  flex-direction: column;
  /* margin-bottom: 1000px; */
`;

const ContainerCard = styled.div`
  width: 500px;
  height: 196px;
  /* background-color:red; */
`;

const ContainerImg = styled.img`
  width: 60px;
  height: 60px;
  margin-right: 42px;
  float: left;
`;

const ContainerTitle = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  color: #ffffff;
`;

const ContainerDescription = styled.p`
  width: 300px;
  height: 96px;
  margin-left: 90px;
  text-align: justify;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 160%;
  color: #ffffff;
`;

export default class Update extends Component {
  render() {
    const dataUpdate = [
      {
        img: img1,
        title: "Monitor",
        desc:
          "Make your standard systems smart with Siphome. A simple installation or integration and we can start to monitor 24/7 to make sure your home is Siphome.",
      },
      {
        img: img2,
        title: "Maintenance",
        desc:
          "Siphome helps you maintain your home. The HomeHealth Record ensures you have the right information at the right time, and if you aren’t able to do the maintenance yourself, we can connect you to a service pro to help.",
      },
      {
        img: img3,
        title: "Repair",
        desc:
          "Siphome empowers you with smart notifications so you can make repairs before they become problems. Notifications provide diagnostics and recommended next actions so you know what to do and have the same information as your service pro.",
      },
      {
        img: img4,
        title: "Replace",
        desc:
          "Improve your home over time. Build your next-gen smart home with Siphome’s advice along the way.",
      },
    ];
    return (
      <div>
        <UpdateContainer>
          <BackgroundImage>
            {/* <TitleContainer>update</TitleContainer> */}
            <Title>update</Title>
            {/* <DescriptionContainer>
              It starts with an upgrade
            </DescriptionContainer> */}
            <Title sub> It starts with an upgrade</Title>
            <ImageContainer src={updateImg} />
            <UpdateData dataUpdate={dataUpdate} />
          </BackgroundImage>
        </UpdateContainer>
      </div>
    );
  }
}
