import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";


const CardContainer = styled.div`
  width: 555px;
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
  position: absolute;
  float: right;
  top: 30px;
  right: 15px;
  color: gray;
  font-size: 45px;
`;

const ReviewText = styled.p`
  margin-top: 30px;
  width: 450px;
  height: 96px;
  padding-left: 30px;
  top: 30px;
  /* Hero / Paragraph */
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 160%;
  text-align: left;
  /* or 32px */
  /* Solid Black */
  color: #262b35;
`;

const userImg = styled.img`
  position: absolute;
  width: 74px;
  height: 74px;
  left: 30px;
  top: 42px;
  border-radius: 50%;
  /* top: 5186px; */
`;

const userName = styled.span`
  /* Body / Text */
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 160%;
  top: 42px;
  bottom: 11px;
  /* left: 30px; */
  /* identical to box height, or 24px */
  /* Gray */
  color: #606c84;
`;

const jobDesk = styled.span`
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
  const { text, userImgUrl, username, jobdesk } = props;
  return (
    <div>
      <CardContainer>
      {/* <userImg src={userImgUrl} alt="yusuf" /> */}
        <QuoteIcon>
          <FontAwesomeIcon icon={faQuoteRight} />
        </QuoteIcon>
        <ReviewText>{text}</ReviewText>
        <userName>{username}</userName>
        <jobDesk>{jobdesk}</jobDesk>
      </CardContainer>
    </div>
  )
}
