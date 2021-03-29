import React from 'react'
import Wrapper from './Wrapper'
import Weather from './Weather'


import styled from 'styled-components'


const StyledDiv = styled.div`
  margin-right: auto;
  margin-left:  auto;
  height: 100%;
  max-width: 960px;
  padding-right: 10px;
  padding-left:  10px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const index = () => {
  return (
    <div>
      <StyledDiv>
        <Weather />
      </StyledDiv>
    </div>
  )
}

export default index
