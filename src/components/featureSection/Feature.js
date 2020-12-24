import React, { Component } from "react";
import styled from "styled-components";
import imgDotdot from "../../assets/images/dot.png";
import imgIlustration from "../../assets/images/illustation.png";
import Title from "../../containers/title/Title";
import TitleDescription from "../../containers/title/TitleDescription";
import FeatureData from "../../containers/featureData/FeatureData";
import img1 from "../../assets/images/icon.png";
import img2 from "../../assets/images/iconDiagnosis.png";
import img3 from "../../assets/images/icon (1).png";
import img4 from "../../assets/images/icon (2).png";

const FeatureContainer = styled.div`
  padding-inline-start: 20%;
  /* padding-bottom:182px; */
  /* align-items:center; */
`;

const ImageDotdot = styled.img`
  /* width: 200px; */
  /* height: 240px; */
  float: right;
  margin: 0;
  display: flex;
  flex-direction: column;
`;

const TitleContainer = styled.div`
  margin-top: 118px;
  width: 900px;
  height: 96px;
  font-style: italic;
  font-weight: 500;
  font-size: 20px;
  line-height: 160%;
  letter-spacing: 0.01em;
  color: #606c84;
  align-items: center;
  /* text-align:center; */
`;

const ContentContainer = styled.div`
  margin-top: 128px;
`;

const ImageIllustration = styled.img`
  width: 457px;
  height: 456.75px;
  /* background-color:red; */
  margin-right: 85px;
  float: left;
  margin-top: 128px;
`;

const RightContainer = styled.div`
  width: 658px;
  height: 755px;
  /* background-color:blue; */
  float: left;
`;

const ContentTitle = styled.p`
  width: 141px;
  height: 21px;
  /* Section / Subtitle */
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 140%;
  /* identical to box height, or 21px */
  letter-spacing: 0.6em;
  text-transform: uppercase;
  /* Primary Blue */
  color: #1c57c9;
`;

const ContentTitleCapital = styled.p`
  width: 287px;
  height: 59px;
  /* Section / Title */
  font-style: normal;
  font-weight: bold;
  font-size: 42px;
  line-height: 140%;
  /* identical to box height, or 59px */
  letter-spacing: -0.02em;
  /* Solid Black */
  color: #262b35;
`;

const ContainerDetails = styled.p`
  width: 600px;
  height: 87px;
  /* Section / Paragraph */
  font-style: normal;
  font-weight: normal;
  font-size: 19px;
  line-height: 160%;
  /* or 29px */
  /* Gray */
  color: #606c84;
  display: flex;
`;

const ContainerDetailsDesc = styled.div`
  width: 658px;
  height: 488px;
  margin-top: 60px;
  /* flex-direction: row; */
  /* display: flex; */
  float:left;
`;

const ContainerDetailsCard = styled.div`
  width: 324px;
  height: 226px;
  float:left;
`;

const CardImg = styled.img`
  width: 55px;
  height: 55px;
`;

const CardTitle = styled.p`
  width: 242px;
  height: 24px;
  /* Body / Title */
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  /* identical to box height, or 133% */
  /* Solid Black */
  color: #262b35;
`;
const CardDesc = styled.p`
  width: 260px;
  height: 72px;
  /* Body / Text */
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 160%;
  /* or 24px */
  /* Gray */
  color: #606c84;
`;

const data = [
  {
    img: img1,
    titile: "Automatic Threat Detection",
    desc:
      "Siphome reacts the moment your equipment fails, alerting you to the problem.",
  },
  {
    img: img2,
    titile: "Smart Diagnostics",
    desc:
      "See exactly what is malfunctioning and compare your maintenance options on the same screen.",
  },
  {
    img: img3,
    titile: "Disaster Prevention",
    desc:
      "Predictive analytics lets you see what needs maintenance before it fails.",
  },
  {
    img: img4,
    titile: "24/7 Service",
    desc:
      "Siphome monitors your critical systems 24/7 so you can enjoy peace of mind.",
  },
];
class Feature extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: null,
      title: "",
      desc: "",
    };

    //   [
    //     {
    //     img: img1,
    //     titile: "Automatic Threat Detection",
    //     description:
    //       "Siphome reacts the moment your equipment fails, alerting you to the problem."
    //     }
    //   },
    //   {
    //     img: img2,
    //     titile: "Smart Diagnostics",
    //     description:
    //       "See exactly what is malfunctioning and compare your maintenance options on the same screen.",
    //   },
    //   {
    //     img: img3,
    //     titile: "Disaster Prevention",
    //     description:
    //       "Predictive analytics lets you see what needs maintenance before it fails.",
    //   },
    //   {
    //     img: img4,
    //     titile: "24/7 Service​",
    //     description:
    //       "Siphome monitors your critical systems 24/7 so you can enjoy peace of mind.",
    //   }];
    //  }
    //  ubah =( ) => {

    //  }

    //  componentDidMount(){

    //   const {img, data} = this.props
    //   if(data.length > 0){
    //     this.setState({img: img})
    //   }
    //  }

    //  componentDidUpdate(prevProps){
    //    const {img, data} = this.props

    //    if(this.props.img !== prevProps.img || this.props.data !== prevProps.data){

    //     if(data.length > 0){
    //       this.setState({img: img2})
    //     }

    //    }
  }
  render() {
    // const ubah = () => {
    //   this.setState({img: img3})
    // }
    console.log("data", data);
    return (
      <div>
        <FeatureContainer>
          <ImageDotdot src={imgDotdot} />
          <TitleContainer>
            Every day your home faces countless potential threats. Every day you
            face countless potential headaches. A small problem can become a
            major disaster. Early warning signs exist but often you can't hear
            or see them.
          </TitleContainer>
          <ContentContainer>
            <ImageIllustration src={imgIlustration} alt="image ilustration" />
            <RightContainer>
              <ContentTitle>Features</ContentTitle>
              <ContentTitleCapital>Meet Siphome</ContentTitleCapital>
              <ContainerDetails>
                The most comprehensive smart solution to home maintenance. All
                it takes is a simple and affordable sensor installation by one
                of our Siphome certified technicians.
              </ContainerDetails>
              <ContainerDetailsDesc>
                {data.map((val, idx) => (
                  <ContainerDetailsCard key={idx}>
                    <CardImg src={val.img} />
                    <CardTitle>
                      {/* <FeatureData title={this.state.titile}/> */}
                      {val.titile}
                    </CardTitle>
                    <CardDesc>
                      {/* <FeatureData description={this.state.description}/> */}
                      {val.desc}
                    </CardDesc>
                  </ContainerDetailsCard>
                ))}
              </ContainerDetailsDesc>
            </RightContainer>
          </ContentContainer>
        </FeatureContainer>
      </div>
    );
  }
}

export default Feature;
