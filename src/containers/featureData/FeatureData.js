import React from 'react'
import styled from 'styled-components'

const ContainerDetailsDesc = styled.div`
  width: 658px;
  height: 488px;
  margin-top: 60px;
  /* flex-direction: row; */
  /* display: flex; */
  float: left;
`;

export default function FeatureData(props) {
  return (
    <div>
      <ContainerDetailsDesc>{props.dataFromParent}</ContainerDetailsDesc>
    </div>
  )
}
