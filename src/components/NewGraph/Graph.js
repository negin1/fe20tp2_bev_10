import React from 'react';
import { Line } from 'react-chartjs-2';
import StyledLineGraph from '../Styles/StyledLineGraph';
import { daysHandler } from './api';


/* 
const userConfig = {
    dateRange: '7d', // '30d', '365d'
    countries: ['Denmark', 'Sweden', 'China', 'Taiwan'],
    infected: true,
    deaths: false,
    recovered: false
}
 */


const Graph = (props) => {
    /* console.log('Hej från Graph') */
    //getReportByDateRange();
    const pastWeek = daysHandler(props.data.days); // {from: "2021-03-24", to: "2021-03-31"}
    //console.log(props.data)
    return (
        <StyledLineGraph>
            <Line data={{
                labels: [pastWeek.from, pastWeek.to],
                datasets: [
                    {
                        label: props.data.countrySlug,
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
                        data: [1, 2]
                    },
                ]
            }} />
        </StyledLineGraph>);
}
export default Graph;