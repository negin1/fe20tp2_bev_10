import React from 'react'
import Cards from './Cards'
import { Card, Grid, Typography, CardContent } from '@material-ui/core'
import CountUp from 'react-countup'

import styled from 'styled-components'
import NumberFormat from 'react-number-format'

const StyledDiv = styled.div`
padding-top: 2em; 
padding-bottom: 2em; 

h4 {
  padding-bottom: 1em; 
}
`

const CovidSummary = (props) => {
  const { totalConfirmed, totalRecovered, totalDeaths, country, date } = props

  return (
    <StyledDiv>
      <div>
        <h4 style={{ textTransform: 'capitalize' }}>
          {country === '' ? 'Covid-19 world wide' : country}
        </h4>{' '}
        {/* look at this later */}
        <Grid container spacing={3} justify='center'>
          <Grid item component={Card}>
            <CardContent>
              <Cards>
                <Typography color='secondary' gutterBottom>
                  Total infected
                </Typography>

                <Typography varant='h5'></Typography>

                <CountUp
                  start={0}
                  end={totalConfirmed}
                  duration={2.5}
                  separator=','
                />
                <p>{new Date().toDateString()}</p>
              </Cards>
            </CardContent>
          </Grid>

          <Grid item component={Card}>
            <CardContent>
              <Cards>
                <Typography color='secondary' gutterBottom>
                  Total recovered
                </Typography>
                <Typography varant='h5'></Typography>

                <CountUp
                  start={0}
                  end={totalRecovered}
                  duration={2.5}
                  separator=','
                />
                <p>{new Date().toDateString()}</p>
              </Cards>
            </CardContent>
          </Grid>

          <Grid item component={Card}>
            <CardContent>
              <Cards>
                <Typography color='secondary' gutterBottom>
                  Total deaths
                </Typography>
                <Typography varant='h5'></Typography>

                <CountUp
                  start={0}
                  end={totalDeaths}
                  duration={2.5}
                  separator=','
                />
                <p>{new Date().toDateString()}</p>
              </Cards>
            </CardContent>
          </Grid>
        </Grid>
      </div>
    </StyledDiv>
  )
}

export default CovidSummary
