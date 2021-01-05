import React from "react";
import styled from "styled-components";

const ContainerData = styled.div`
  /* width: 440px; */
  /* height: 1044px; */
  /* background-color:red; */
  float: right;
  display: flex;
  flex-direction: column;
  /* margin-bottom: 1000px; */
`;

const ContainerCard = styled.div`
  width: 500px;
  height: 196px;
  /* background-color:red; */
`;

const ContainerImg = styled.img`
  width: 60px;
  height: 60px;
  margin-right: 42px;
  float: left;
`;

const ContainerTitle = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  color: #ffffff;
`;
const ContainerDescription = styled.p`
  width: 300px;
  /* height: 96px; */
  height: 96px;
  margin-left: 90px;
  text-align: justify;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 160%;
  color: #ffffff;
`;

export default function UpdateData(props) {
  return (            <ContainerData>
              {props.dataUpdate.map((val, i) => (
                <ContainerCard key={i}>
                  <ContainerImg src={val.img} />
                <ContainerTitle>{val.title}</ContainerTitle>
                <ContainerDescription>{val.desc}</ContainerDescription>
                </ContainerCard>
              ))}
            </ContainerData>
  );
}
