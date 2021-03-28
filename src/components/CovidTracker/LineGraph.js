import React from 'react';
import { Line } from 'react-chartjs-2';
import StyledLineGraph from '../Styles/StyledLineGraph';
/*

{dates: ['2021-03-10', '2021-03-11'],
data: [
  {'Sweden Infected': [4000, 5000},
  {'Norway Infected': [300, 400]}
]}
*/


const LineGraph = (props) => {

  return (
    <StyledLineGraph>
      <Line data={{

        labels: props.label.map(l => l.substring(0, 10)),
        datasets: [
          {

            label: 'Total infected people per country',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: props.yAxis
          },
        ]
      }} />

    </StyledLineGraph>
  )
}

export default LineGraph