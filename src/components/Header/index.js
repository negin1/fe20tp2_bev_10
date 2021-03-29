import React from 'react';
import styled from 'styled-components'


const StyledDiv = styled.div`
  display: flex;
  background-color: #58595D;
  position: fixed;
  width: 100%;
  z-index: 0;
  top: 0;
  left: 0; 
  
> h1{

  font-size:20px
  


}

`;

const index = () => {
  return (


  <StyledDiv>
    <h1>Corona Virus Tracker</h1>
  </StyledDiv>
  )
}

export default index
