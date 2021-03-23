import React from 'react'
import styled from 'styled-components'

const StyledDiv= styled.div`
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


const Wrapper = (props) => {
  return (
    <StyledDiv>
    {props.children}
      
    </StyledDiv>
  )
}

export default Wrapper
