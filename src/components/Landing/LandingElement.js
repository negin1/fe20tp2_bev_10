import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import globe from './globe.jpg';

export const LandingContainer = styled.div`

/* grid-template-columns: 1fr repeat()(12, minmax()(auto, 4.2rem)) 1fr; */
/* grid-template-rows: 8rem 20 rem 5 rem auto;
gap: 0 2rem; */

position: absolute;
width: 100%;
height: 500px;
display: flex;
justify-content: center;
align-items: center;

background-image: url(${globe});
background-position: center;
background-size: cover;
background-repeat: no-repeat;

/* 
height: 100vh;
display: grid;
width: 100%;
justify-content: center;
align-items: center;
 */
`;

export const LandingContent = styled.div`
grid-column: 1 / span 12;
grid-row: 2 / 6;
overflow: hidden;
position: relative;

display: flex;
flex-direction: column;
width: 100vmax;
height: 50vh;



align-items: center;
padding: 0 20px;
justify-content: center;

`

export const Landingh1 = styled.h1`
font-size: 50px;
color: #fff;
font-weight: bold;

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
  margin-top: 20px;
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
  color: #000;
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