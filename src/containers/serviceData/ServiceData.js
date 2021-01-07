import React from "react";
import styled from "styled-components";

const CardContainter = styled.div`
  width: 360px;
  height: 96px;
  margin-left: 10px;
  /* text-align:center; */
  /* align-items:center; */
  float: left;
  display: flex;
  flex-direction: row;
`;

const CardDescription = styled.div`
  padding-top: 22px;
  padding-bottom: 26px;
  padding-right: 20px;
  /* padding-left:103px; */
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  color: #262b35;
`;

const CardImage = styled.img`
  padding-left: 24px;
  padding-top: 20.5px;
  padding-right: 30px;
  width: 55px;
  height: 55px;
`;

export default function ServiceData(props) {
  return (
    <div>
      {" "}
      {props.ServiceUpdateData.map((val, i) => (
        <CardContainter key={i}>
          <CardImage src={val.img}/>
          <CardDescription>{val.desc}</CardDescription>
        </CardContainter>
      ))}
    </div>
  );
}
