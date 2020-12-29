import React, { Component } from "react";
import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  Dot,
  DotGroup,
  Slide,
  Slider,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import styled from "styled-components";
import userImgUrl1 from "../../assets/images/Ellipse 32 (2).png";
import userImgUrl2 from "../../assets/images/Ellipse 32 (1).png";
import userImgUrl3 from "../../assets/images/Ellipse 32 (2).png";
import userImgUrl4 from "../../assets/images/Ellipse 32 (1).png";
import ReviewCard from "../../containers/reviewCards/ReviewCard";
// const styleCarouselProvider = styled(CarouselProvider)`

const TestimonialContainer = styled.div`
  width: 1196.88px;
  height: 615px;
  margin-top: 150px;
  text-align: center;
  align-items: center;
  /* background-color:rgb(131, 185, 185); */
  margin-left: 330px;
  margin-bottom: 161px;
`;

const SectionSubtitle = styled.div`
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 140%;
  letter-spacing: 0.6em;
  text-transform: uppercase;
  color: #1c57c9;
  text-align: center;
  align-items: center;
  /* margin-left: 300px; */
`;

const SectionTitle = styled.div`
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 42px;
  line-height: 140%;
  letter-spacing: -0.02em;
  color: #262b35;
  /* margin-left: 300px; */
`;

const ContainerCarousel = styled.div`
  /* margin-bottom:161px; */
`;

const StyledDotGroup = styled(DotGroup)`
  margin: auto;
  display: flex;
  justify-content: center;
  button {
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background-color: #e4e4e4;
    border: none;
    outline: none;
    &:not(:last-of-type) {
      margin-right: 20px;
    }
  }

  .carousel__dot--selected {
    background-color: #1C57C9;
  }
`;

const styleButtonBack = styled(ButtonBack)`
  color: #1ece7a;
  /* margin */
`;
export default class Testimonial extends Component {
  render() {
    return (
      <TestimonialContainer>
        <SectionSubtitle>Testimonials</SectionSubtitle>
        <SectionTitle>
          {" "}
          Let’s see what people says <br />
          about Siphome{" "}
        </SectionTitle>
        <ContainerCarousel>
          <CarouselProvider
            naturalSlideWidth={200}
            naturalSlideHeight={150}
            totalSlides={4}
            visibleSlides={2}
          >
            <Slider>
              <Slide index={0}>
                <ReviewCard
                  text="We have been waiting on this product and now that we have installed a few. We think it will make the industry by storm."
                  username="Ryan Oliver"
                  jobdesk="Design Manager Kiluna"
                />
              </Slide>
              <Slide index={1}>
                <ReviewCard
                  text="Thank you for introducing me to Siphome!  We like how the system gives updates to us and the homeowner as well to give us a real time update on how everything is working."
                  username="Gladina Samantha"
                  jobdesk="CEO JobDesk United, LLC"
                />
              </Slide>
              <Slide index={2}>
                <ReviewCard
                  text="We have been waiting on this product and now that we have installed a few. We think it will make the industry by storm."
                  username="Yusuf Fajarulloh"
                  jobdesk="CEO Repository"
                />
              </Slide>
              <Slide index={3}>
                <ReviewCard
                  text="We have been waiting on this product and now that we have installed a few. We think it will make the industry by storm."
                  username="Nadya Aranti"
                  jobdesk="CEO Nad Company"
                />
              </Slide>
            </Slider>
            <StyledDotGroup />
          </CarouselProvider>
        </ContainerCarousel>
      </TestimonialContainer>
    );
  }
}
