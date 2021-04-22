import React from 'react';
import styled from 'styled-components'


const StyledDiv = styled.div`
  display: flex;
  background-color: #58595D;
  align-items: center;
  width: 100%;
  z-index: 0;
  top: 0;
  left: 0; 
  
  > h1{

    font-size:20px;
    text-shadow: 1px 1px #ffffff; 
    font-family: 'Montserrat', sans-serif;
    color: white;
    letter-spacing: 0.1em;
    text-transform: capitalize; 
  }

  img{
    padding: 20px 40px;
    width: 70px;
  }
`;

const Index = () => {
  return (
    <StyledDiv>
      <img src="/images/logo2.png" alt="" />
      <h1>Cvirus</h1>
    </StyledDiv>
  )
}

export default Index
