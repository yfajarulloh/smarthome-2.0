import React, { Component } from 'react'
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
import ReviewCard from '../../containers/reviewCards/ReviewCard';
// const styleCarouselProvider = styled(CarouselProvider)`

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
      margin-right: 3px;
    }
  }

  .carousel__dot--selected {
    background-color: #1ECE7A;
  }
`;

// const settings = {
//   dots: true,
//   infinite: true,
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   nextArrow: <SampleNextArrow />,
//   prevArrow: <SamplePrevArrow />
// };

const styleButtonBack = styled(ButtonBack)`
  /* background-color:transparent; */
  /* border:none; */
  color: #1ECE7A;
  /* margin */
`;
export default class Testimonial extends Component {
  render() {
    return (
      <div className="testimonial">
      <div className="section-subtitle">Testimonials</div>
      <div className="section-title">
        Let’s see what people says <br />
        about Siphome{" "}
      </div>
      <div className="carousel">
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
                // userImgUrl={userImgUrl1}
              />
            </Slide>
            <Slide index={1}>
              <ReviewCard />
            </Slide>
            <Slide index={2}>
              <ReviewCard />
            </Slide>
            <Slide index={3}>
              <ReviewCard />
            </Slide>
          </Slider>
          <StyledDotGroup />
        </CarouselProvider>
      </div>
    </div>
    )
  }
}
