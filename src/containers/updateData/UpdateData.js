import React from 'react'
import styled from 'styled-components';


const ContainerData = styled.div`
  width: 500px;
  height: 844px;
  margin-left: 69px;
  top: 74px;
`;

const ContainerCard = styled.div`
  width: 500px;
  height: 196px;
  top: 2257px;
`;

const ContainerImg = styled.img`
  width: 60px;
  height: 60px;
  margin-right: 42px;
`;

const ContainerTitle = styled.p`
  width: 68px;
  height: 24px;
  /* Body / Title */
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  /* identical to box height, or 133% */
  /* Pure White */
  color: #ffffff;
`;

const ContainerDescription = styled.p`
  width: 352px;
  height: 96px;
  /* Body / Text */
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 160%;
  /* or 24px */
  /* Pure White */
  color: #ffffff;
`;


export default function UpdateData(props) {
  return (
    <div>
        <ContainerData>
          <ContainerCard>
            <ContainerImg>
              {/* {props.dataUpdate.map(image, i) => key(i)} */}
            </ContainerImg>
          </ContainerCard>
        </ContainerData>
    </div>
  )
}
