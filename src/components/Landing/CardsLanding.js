import React from 'react'
import Cards from './Cards'
import { Card, Grid, Typography, CardContent } from '@material-ui/core'
import CountUp from 'react-countup'
import styled from 'styled-components'

const StyledDiv = styled.div`
padding-top: 2em; 
padding-bottom: 2em; 

h4 {
  padding-bottom: 1em; 
}
`

const CardsLanding = (props) => {
    const { totalConfirmed, totalRecovered, totalDeaths } = props

    return (
        <StyledDiv>
            <p>hello from cardslanding {totalConfirmed}</p>
        </StyledDiv>
    )
}

export default CardsLanding;