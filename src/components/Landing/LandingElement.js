import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import globe from './globe.jpg';

export const LandingContainer = styled.div`

display: grid;
position: relative;
width: 100%;
height: 60vh;
flex-direction: column;
justify-content: center;
align-items: center;


background-image: url(${globe});
background-position: center;
background-size: cover;
background-repeat: no-repeat;


@media screen and (max-width: 875px) {
    width: 100%;
    height: 50vh;
  } 
@media screen and (max-width: 769px) {
    widt: 100%;
    height: 30vh;
  }
  @media screen and (max-width: 400px) {
    width: 100%;
    height: 30vh
  }
  @media screen and (max-width: 300px) {
    width: 100%;
    height: 15vh
  }

`;

export const LandingContent = styled.div`

display: flex;
flex-direction: row;
width: 100vmax;
height: 30vh;


align-items: center;
padding: 0 20px;
justify-content: center; 

`

export const Landingh1 = styled.h1`
font-size: 50px;
color: #fff;
font-weight: bold;
padding: 50px;
text-align: center; 
margin: 0 auto; 


  @media screen and (max-width: 769px) {
    font-size: 32px;
    padding: 20px; 
  }

  @media screen and (max-width: 539px) {
    font-size: 22px;
    padding: 15px; 
  }
  @media screen and (max-width: 351px) {
    font-size: 20px;
  }
`;

export const animeLandingh1 = keyframes`
    from{
        transform: scale(1.1) translateY(120px);
        opacity:0;
    }
    to{
        transform: scale(1) translateY(0px);
        opacity:1;
    }
`;

export const BtnRoute = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  text-align: center;
`;

export const ForwardIcon = styled(FaArrowRight)`
  position: absolute;
  color: #fff;
  top: 17.5px;
  left: 75%;
  margin-left: 5px;
  opacity: 0;
  font-size: 13px; 
`;
export const LandingBtn = styled(Link)`
  color: #fff;
  font-size: 16px;
  padding: 15px 35px;
  color: #fff;
  border-radius: 50px;
  border: none;
  outline: none;
  transition: all 0.3s;
  cursor: pointer;
  background-image: linear-gradient(
    to right,
    rgb(142, 45, 226),
    rgb(74, 0, 224)
  );
  margin-left: 20px;
  &:hover {
    opacity: 1;
    background-image: linear-gradient(
      to right,
      rgb(211, 204, 227),
      rgb(233, 228, 240)
    );
    color: #000;
  }
  animation: ${animeLandingh1} 0.6s forwards ease-in;
`;
