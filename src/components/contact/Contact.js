import React, { Component } from "react";
import styled from "styled-components";
import ContactImg from "../../assets/images/illustrationre.png";
import Button from "../../containers/button/button";
import ImgLogo from "../../assets/images/logocontact.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContactContainer = styled.div`
  background-color: white;
  padding-inline-start: 25%;
  /* display:grid;
grid-template-columns: auto auto; */
  display: flex;
  flex-direction: row;
`;

const LeftContainer = styled.div`
  width: 424px;
  height: 619px;
  /* background-color:green; */
`;

const RightContainer = styled.div`
  width: 420px;
  height: 674px;
  /* background-color:red; */
  margin-left: 162px;
`;

const TitleContainer = styled.div`
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
  margin-top: 215;
`;

const SubTitleContainer = styled.div`
  /* Section / Title */

  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 42px;
  line-height: 140%;
  /* or 59px */
  width: 354px;
  height: 177px;
  letter-spacing: -0.02em;
  /* Solid Black */
  margin-top: 17px;
  margin-bottom: 42px;
  color: #262b35;
`;

const ContactImage = styled.img`
  width: 412px;
  height: 362px;
`;

const TextForm = styled.div`
  /* Form / Title */
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  /* Solid Black */
  color: #262b35;
  margin-bottom: 14px;
`;

const Form = styled.input`
  width: 420px;
  height: 44px;
  left: 706px;
  top: 5931px;
  background: #ffffff;
  border: 1px solid #cccccc;
  box-sizing: border-box;
  border-radius: 3px;
  /* Form / Placeholder */

  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  /* identical to box height */
  padding-left: 20px;

  /* Placeholder */
  margin-bottom: 16px;
  color: #cccccc;
`;

const Selector = styled.select`
  width: 420px;
  height: 44px;
  left: 706px;
  top: 6210px;

  background: #ffffff;
  border: 1px solid #cccccc;
  box-sizing: border-box;
  border-radius: 3px;
  /* Form / Filled */

  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  /* identical to box height */
  padding-left: 20px;

  /* Solid Black */
  margin-bottom: 16px;
  color: #262b35;
`;

const TextArea = styled.textarea`
  width: 420px;
  height: 96px;
  left: 706px;
  top: 6396px;

  background: #ffffff;
  border: 1px solid #cccccc;
  box-sizing: border-box;
  border-radius: 3px;
  /* Form / Placeholder */

  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  /* identical to box height */

  /* Placeholder */
  padding-left: 20px;
  margin-bottom: 36px;
  color: #cccccc;
`;

const Footer = styled.div`
  /* width: 1440px; */
  height: 514px;
  margin-top: 189px;
  /* background-color: yellow; */
  padding-inline-start: 10%;
  margin-left: auto;
  margin-right: auto;
  /* display:grid;
grid-template-columns: auto auto; */
  display: flex;
  flex-direction: row;
`;

const FooterLeftContainter = styled.div`
  width: 510px;
  height: 360px;
  margin-right: 78px;
  /* background-color: red; */
`;

const FooterMiddleLeftContainter = styled.div`
  width: 350px;
  height: 360px;
  /* background-color: black; */
`;

const FooterMiddleRightContainter = styled.div`
  width: 350px;
  height: 360px;
  /* background-color: blue; */
  margin-right: 10px;
`;

const FooterRightContainter = styled.div`
  width: 350px;
  height: 360px;
  /* background-color: green; */
`;

const TxtLeft = styled.div`
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 150%;
  /* or 30px */
  /* Solid Black */
  margin-top: 53.37px;
  color: #262b35;
`;

const TxtLeftDetails = styled.div`
  width: 360px;
  height: 240px;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 150%;
  /* or 30px */
  /* Solid Black */
  color: #262b35;
`;

const TitleContact = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 240%;
  /* or 58px */
  /* Dark Grey */
  color: rgba(38, 43, 53, 1);
`;

const SubTitleContact = styled.div`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 240%;
  color: #606c84;
  &:hover{
    color: rgba(28, 87, 201, 1);
    font-weight: bold;
  }
`;

const TxtCopyRight = styled.div`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 150%;
  align-items: center;
  text-align: center;
  /* identical to box height, or 30px */
  /* Gray */
  color: #606c84;
  margin-bottom: 30px;
`;

export default class Contact extends Component {
  render() {
    return (
      <div>
        <ContactContainer>
          <LeftContainer>
            <TitleContainer>Contact</TitleContainer>
            <SubTitleContainer>
              Skip logging in,
              <br /> get what you need <br />
              with a few key details
            </SubTitleContainer>
            <ContactImage src={ContactImg} />
          </LeftContainer>
          <RightContainer>
            <TextForm>Your Name (required)</TextForm>
            <Form
              type="text"
              id="fname"
              name="firstname"
              placeholder="Enter name"
            />
            <TextForm>Email (required) </TextForm>
            <Form
              type="text"
              id="fname"
              name="firstname"
              placeholder="Enter email"
            />
            <TextForm>Subject </TextForm>
            <Form
              type="text"
              id="fname"
              name="firstname"
              placeholder="Enter subject"
            />
            <TextForm>Select Job </TextForm>
            <Selector>
              <option value="australia">Please Select</option>
              <option value="australia">Programmer</option>
              <option value="canada">QA</option>
              <option value="usa">Data Science</option>
            </Selector>
            <TextForm>Company Name</TextForm>
            <Form
              type="text"
              id="fname"
              name="firstname"
              placeholder="Enter company name"
            />
            <TextForm>Message</TextForm>
            <TextArea>Enter Message</TextArea>
            <Button white>Send Now</Button>
          </RightContainer>
        </ContactContainer>
        <Footer>
          <FooterLeftContainter>
            <img src={ImgLogo} />
            <TxtLeft>Siphome, LLC</TxtLeft>
            <TxtLeftDetails>
              The New Building 2320 Lang Avenue, Park Valley, Utah,
              <br /> United States.
              <br /> 84329 <br /> <br />
              P: +1 176 909 2900 <br />
              E: siphome@gmail.com
            </TxtLeftDetails>
          </FooterLeftContainter>
          <FooterMiddleLeftContainter>
            <TitleContact>Navigation</TitleContact>
            <SubTitleContact>Home</SubTitleContact>
            <SubTitleContact>
              Features
            </SubTitleContact>
            <SubTitleContact>Services</SubTitleContact>
            <SubTitleContact>Testimonials</SubTitleContact>
            <SubTitleContact>We Care</SubTitleContact>
            <SubTitleContact>Idea Exchange</SubTitleContact>
          </FooterMiddleLeftContainter>
          <FooterMiddleRightContainter>
            <TitleContact>About</TitleContact>
            <SubTitleContact>Contact Us</SubTitleContact>
            <SubTitleContact>Privacy & Policy</SubTitleContact>
            <SubTitleContact>Terms & Conditions</SubTitleContact>
            <SubTitleContact>FAQ</SubTitleContact>
          </FooterMiddleRightContainter>
          <FooterRightContainter>
            <TitleContact>Stay Connected</TitleContact>
            <SubTitleContact>
              <FontAwesomeIcon icon="fa fa-facebook-official blue-color" />
              Facebook
            </SubTitleContact>
            <SubTitleContact>
              <FontAwesomeIcon icon="fa fa-facebook-official blue-color" />
              Twitter
            </SubTitleContact>
            <SubTitleContact>
              <FontAwesomeIcon icon="fa fa-facebook-official blue-color" />
              Instagram
            </SubTitleContact>
          </FooterRightContainter>
        </Footer>
        <TxtCopyRight>Copyright© 2020. Siphome Smart home LLC.</TxtCopyRight>
      </div>
    );
  }
}
