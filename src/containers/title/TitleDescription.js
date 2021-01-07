import React from "react";
import styled from "styled-components";

const ContainerDetails = styled.p`
  /* Hero / Paragraph */
  line-height: 160%;
  /* or 32px */
  /* Pure White */

  font-size: ${({home}) => (home ? "20px" : "20px")};
  font-weight: ${({home}) => (home ? "normal" : "500")};
  height: ${({ home }) => (home ? "196px" : "96px")};
  width: ${({ home }) => (home ? "560px" : "900px")};
  font-style: ${({ home }) => (home ? "normal" : "italic")};
  align-items: ${({ home }) => (home ? "" : "0.01em")};
  align-items: ${({ home }) => (home ? "" : "center")};
  color: ${({ home }) => (home ? "#ffffff" : "#606C84")};
  margin-top: ${({ home }) => (home ? "36px" : "118px")};
  letter-spacing: ${({ home }) => (home ? "" : "0.01em")};

  
  @media screen and (max-width: 480px) {
    width: 335px;
    height: 116px;
    font-size: 18px;
    line-height: 160%;
    text-align:center;
    margin-bottom:30px;
  }
`;


export default function TitleDescription(props) {
  return (
    <div>
      {/* <ContainerDetails home>
        Turn your home into a smarthome today with a simple & affordable
        upgrade. Discover the upgrade that automates home maintenance.
      </ContainerDetails> */}
        <ContainerDetails {...props}>
          {props.dataFromParent}
      </ContainerDetails>
    </div>
  );
}
