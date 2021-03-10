import React from 'react'
import styled from 'styled-components'
import LineGraph from './LineGraph'
import Card from './Card'

const StyledDiv = styled.div`
text-align: center;
`;

function CovidTracker() {
  return (
    <StyledDiv>
      <div>
        <div>
          <h1>World wide Corona report</h1>
          <Card>
            <span>Total confirmed</span>
          </Card>     
        </div>
      </div>
      <LineGraph />
    </StyledDiv>
  )
}

export default CovidTracker;



