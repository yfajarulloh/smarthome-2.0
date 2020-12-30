import React from "react";
import styled from "styled-components";


const ContainerDetailsDesc = styled.div`
  width: 658px;
  height: 488px;
  margin-top: 60px;
  /* flex-direction: row; */
  /* display: flex; */
  float: left;
`;

const ContainerDetailsCard = styled.div`
  width: 324px;
  height: 226px;
  float: left;
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

export default function FeatureData(props) {
  return (
    <div>
      <ContainerDetailsDesc>
          <ContainerDetailsCard>
            {/* <CardImg /> */}
            <CardTitle>
            </CardTitle>
            <CardDesc></CardDesc>
          </ContainerDetailsCard>
      </ContainerDetailsDesc>
    </div>
  );
}
