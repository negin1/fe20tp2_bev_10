import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
  background: #fff;
  box-sizing: border-box;
  box-sizing: 0 0 10px 0 #eee;
  width: 230px;
  height: 130px;
`

const Cards = (props) => {
  return <StyledDiv>{props.children}</StyledDiv>
}

export default Cards
