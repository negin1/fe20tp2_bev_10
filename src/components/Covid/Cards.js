import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  //console.log(confirmed)
  if (!confirmed) {
    return 'Loading...'

  }



  return (
    <div>
      <div>
        <Grid container spacing={3} justify="center">
          <Grid item component={Card}>
            <CardContent>
              <Typography color="secondary" gutterBottom>Infected</Typography>
              <Typography varant="h5">
                <CountUp
                  start={0}
                  end={confirmed.value}
                  duration={2.5}
                  separator="," />
              </Typography>
              <Typography color="secondary">{new Date(lastUpdate).toDateString()} </Typography>
              <Typography varant="body2">Number of active cases of COVID-19</Typography>
            </CardContent>
          </Grid>

          <Grid item component={Card}>
            <CardContent>
              <Typography color="secondary" gutterBottom>Recovered</Typography>
              <Typography varant="h5">
                <CountUp
                  start={0}
                  end={recovered.value}
                  duration={2.5}
                  separator="," />
              </Typography>
              <Typography color="secondary">{new Date(lastUpdate).toDateString()} </Typography>
              <Typography varant="body2">Number of recoveries from COVID-19</Typography>
            </CardContent>
          </Grid>

          <Grid item component={Card}>
            <CardContent>
              <Typography color="secondary" gutterBottom>Deaths</Typography>
              <Typography varant="h5">
                <CountUp
                  start={0}
                  end={deaths.value}
                  duration={2.5}
                  separator="," />
              </Typography>
              <Typography color="secondary">{new Date(lastUpdate).toDateString()} </Typography>
              <Typography varant="body2">Number of deaths caused by COVID-19</Typography>
            </CardContent>
          </Grid>

        </Grid>
      </div>
    </div>
  )
}

export default Cards
