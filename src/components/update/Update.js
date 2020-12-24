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



const UpdateContainer = styled.div`
  width: 1440px;
  height: 1170px; 
  padding-inline-start: 390px;
  display:flex;
  /* margin-top:100px; */
  /* margin-bottom:1000px; */
`;

const TitleContainer = styled.p`
  width: 106px;
  /* height: 21px; */
  /* Section / Subtitle */
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 140%;
  /* identical to box height, or 21px */
  letter-spacing: 0.6em;
  text-transform: uppercase;
  /* Primary Blue */
  color: #1c57c9;
  margin-top: 54px;
  /* margin-bottom:16px; */
  left: 119px;
`;

const DescriptionContainer = styled.p`
  width: 440px;
  /* height: 118px; */
  left: 119px;
  /* Section / Title */
  font-style: normal;
  font-weight: bold;
  font-size: 42px;
  line-height: 140%;
  /* or 59px */
  letter-spacing: -0.02em;
  /* Solid Black */
  color: #262b35;
`;

const ImageContainer = styled.img`
/* float:left; */
/* flex-direction:row; */
/* display:inline; */
  width: 60%;
  /* height: 676px; */
  /* margin-top :64px; */
`;
const BackgroundImage = styled.div`
  background-image: url(${backgroundImg});
  background-repeat: no-repeat;
  float: right;
  width: 90%;
  height: 150vh;
  margin-right: 150px;
`;

const ContainerData = styled.div`
  width: 440px;
  height: 844px;
  margin-left: 69px;
  /* top: 74px; */
  /* background-color:red; */
  float:right;
  /* flex-direction:row; */
`;

const ContainerCard = styled.div`
  width: 500px;
  height: 196px;
  /* top: 2257px; */
  /* margin-right:1000px; */
  /* float:right; */
  /* background-color:green; */
/* display:flex; */
  /* flex-direction:row; */
`;

const ContainerImg = styled.img`
  width: 60px;
  height: 60px;
  margin-right: 42px;
  float:left;
`;

const descData = styled.div`
width: 352px;
height: 136px;
`;

const ContainerTitle = styled.p`
  /* width: 68px; */
  /* height: 24px; */
  /* Body / Title */
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  /* identical to box height, or 133% */
  /* Pure White */
  /* margin-left:90px; */
  color: #ffffff;
  /* float:left; */
`;

const ContainerDescription = styled.p`
  width: 300px;
height: 96px;
  /* padding-top:10px; */
  height: 96px;
  margin-left:90px;
  text-align:left;
  /* Body / Text */
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 160%;
  /* or 24px */
  /* Pure White */
  color: #ffffff;
`;


export default class Update extends Component {
  render() {
    const dataUpdate = [{
      img : img1,
      title: 'Monitor',
      desc :'Make your standard systems smart with Siphome. A simple installation or integration and we can start to monitor 24/7 to make sure your home is Siphome.'
    },{
      img : img2,
      title: 'Maintenance',
      desc :'Siphome helps you maintain your home. The HomeHealth Record ensures you have the right information at the right time, and if you aren’t able to do the maintenance yourself, we can connect you to a service pro to help.'
    },{
      img : img3,
      title: 'Repair',
      desc :'Siphome empowers you with smart notifications so you can make repairs before they become problems. Notifications provide diagnostics and recommended next actions so you know what to do and have the same information as your service pro.'
    },{
      img : img4,
      title: 'Replace',
      desc :'Improve your home over time. Build your next-gen smart home with Siphome’s advice along the way.'
    }, ];
    return (
      <div>
        <UpdateContainer>
          <BackgroundImage>
            <TitleContainer>
              update
            </TitleContainer>
            <DescriptionContainer>
              It starts with an upgrade
            </DescriptionContainer>
            <ImageContainer src={updateImg} />
              {/* <UpdateData dataUpdate={dataUpdate} /> */}
            <ContainerData>
              {dataUpdate.map((val,i) => (
                <ContainerCard key={i}>
                <ContainerImg src={val.img}/>
                <descData>
                <ContainerTitle>
                    {val.title}
                </ContainerTitle>
                <ContainerDescription>
                    {val.desc}
                </ContainerDescription>
                </descData>
              </ContainerCard>
              ))}
            </ContainerData>
          </BackgroundImage>
        </UpdateContainer>
      </div>
    );
  }
}
