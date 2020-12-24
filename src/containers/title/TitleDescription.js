import React from "react";
import styled from "styled-components";

const ContainerDetails = styled.p`
  width: 560px;
  height: 196px;
  /* Hero / Paragraph */
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 160%;
  /* or 32px */
  /* Pure White */
  color: #ffffff;
  margin-top: ${({ home }) => (home ? "36px" : "24px")};
`;

export default function TitleDescription() {
  return (
    <div>
      <ContainerDetails home>
        Turn your home into a smarthome today with a simple & affordable
        upgrade. Discover the upgrade that automates home maintenance.
      </ContainerDetails>
    </div>
  );
}
