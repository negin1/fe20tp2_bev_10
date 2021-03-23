import React from 'react'
import Cards from './Cards'
import { Card, Grid, Typography, CardContent } from '@material-ui/core'
import CountUp from 'react-countup'

import styled from 'styled-components'
import NumberFormat from 'react-number-format'

//const StyledDivCard = styled.div`
//display: flex;
//justify-content: center;
//`

const CovidSummary = (props) => {
  const { totalConfirmed, totalRecovered, totalDeaths, country, date } = props

  return (
    <div>
      <div>
        <h1 style={{ textTransform: 'capitalize' }}>
          {country === '' ? 'World wide Corona Report' : country}
        </h1>{' '}
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
                  Total recovered
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
    </div>
  )
}

export default CovidSummary
