import styled from 'styled-components';
import globe from './globe.jpg';

export const LandingContainer = styled.div`
width:100%;
height:100vh;

background-image:url(${globe});
background-position: center;
background-size: cover;
background-repeat:no-repeat;

display:flex;
justify-content:center;
align-items:center
`;

export const LandingContent = styled.div`
display:flex;
justify-content:center;
align-items:center
`;

export const LandingH1 = styled.h1`
font-size: 44px;
color: #fff;
font-weight: bold;
transition: all 0.3s;

@media screen and (max-width: 769px) {
    font-size: 32px;
  }
@media screen and (max-width: 400px) {
    font-size: 22px;
  }
@media screen and (max-width: 300px) {
    font-size: 20px;
  }
`;