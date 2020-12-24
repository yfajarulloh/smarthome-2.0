import React, { Component } from 'react'
import Feature from './featureSection/Feature'
import Home from './home/Home'
import Update from './update/Update'
import Service from './services/Services'
import Testimonial from './testimonial/Testimonial'
import styled from 'styled-components'

const MainContainer = styled.div`
  width:100%;
  height:100%;
  display:flex;
  flex-direction:column;
`;


export default class SmartHome extends Component {
  render() {
    return (
      <MainContainer>
        <Home/>
        <Feature/>
        <Update/>
        <Service/>
        <Testimonial/>
      </MainContainer>
    )
  }
}
