import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Slide, Slider } from "pure-react-carousel";
import React from "react";
import styled from "styled-components";
import ImgDot from "../../assets/images/Ellipse 32 (1).png";

const CardContainer = styled.div`
  width: 500px;
  height: 279px;
  /* left: 141px; */
  margin-top: 90px;
  margin-left: 2em;
  margin-bottom: 10px;
  background-color: #ffffff;
  box-shadow: 0px 20px 48px rgba(0, 0, 0, 0.06);
  border-radius: 24px;
  border: 2px solid rgba(236, 240, 246, 1);
  position: relative;
`;

const QuoteIcon = styled.div`
  /* width: %; */
  /* height: 100px; */
  position: absolute;
  float: right;
  top: 156px;
  right: 30px;
  color: rgba(0, 0, 0, 0.06);
  /* Pure White */
  /* background: #ffffff; */
  box-shadow: 0px 20px 48px rgba(0, 0, 0, 0.06);
  border-radius: 24px;
  font-size: 45px;
`;

const ReviewText = styled.p`
  margin-top: 30px;
  width: 420px;
  height: 96px;
  top: 30px;
  /* Hero / Paragraph */
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 160%;
  text-align: left;
  color: #262b35;
  margin-bottom: 42px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  padding-left: 30px;
`;

const UserImage = styled.img`
  position: absolute;
  float: right;
  top: -20px;
  right: -30px;
  color: rgba(0, 0, 0, 0.06);
  /* Pure White */
  /* background: #ffffff; */
  box-shadow: 0px 20px 48px rgba(0, 0, 0, 0.06);
  border-radius: 24px;
  font-size: 45px;
`;

const UserName = styled.span`
  /* Body / Text */
  top: 42px;
  bottom: 11px;
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  /* identical to box height, or 133% */
  /* Solid Black */
  color: #262b35;
  margin-bottom: 11px;
`;

const JobDesk = styled.span`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 160%;
  margin-bottom: 33px;
  /* identical to box height, or 24px */
  /* Gray */
  color: #606c84;
`;

export default function ReviewCard(props) {
  return (
    <div>
      <Slider>
        {props.TestimonialData.map((val,i) => (
        <Slide key={i}>
          <CardContainer>
            <QuoteIcon>
              <FontAwesomeIcon
                style={{ width: "2em", height: "70px" }}
                icon={faQuoteRight}
              />
            </QuoteIcon>
            <Container>
              <UserImage src={val.img} />
              <ReviewText>{val.text}</ReviewText>
              <UserName>{val.username}</UserName>
              <JobDesk>{val.jobdesk}</JobDesk>
            </Container>
          </CardContainer>
        </Slide>
        ))}
      </Slider>
    </div>
  );
}
