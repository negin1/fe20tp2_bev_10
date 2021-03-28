import React from 'react';
import { Line } from 'react-chartjs-2';
import styled from 'styled-components'
import StyledLineGraph from '../Styles/StyledLineGraph';

const StyledDiv = styled.div`
max-width: 600px,
min-width: 300px; 
height: auto,
margin: 40px auto,
`;

const LineGraphRecovered = (props) => {
    return (
        <StyledLineGraph>

            <Line data={{

                labels: props.label.map(l => l.substring(0, 10)),
                datasets: [
                    {

                        label: 'Total recoveries per country',
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: 'rgba(75,192,192,0.4)',
                        borderColor: 'rgba(4,196,58,1)',
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: 'rgba(4,196,58,1)',
                        pointBackgroundColor: '#fff',
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                        pointHoverBorderColor: 'rgba(220,220,220,1)',
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: props.yAxisRecovered
                    }
                ]
            }} />

        </StyledLineGraph>
    )
}

export default LineGraphRecovered