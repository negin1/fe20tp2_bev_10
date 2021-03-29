import React from 'react';
import { Line } from 'react-chartjs-2';

const LineGraphDeaths = (props) => {
    return (
        <div
            style={{
                width: '600px',
                height: 'auto',
                margin: '20px auto',
            }}
        >

            <Line data={{

                labels: props.label.map(l => l.substring(0, 10)),
                datasets: [
                    {

                        label: 'Total deaths per country',
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: 'rgba(75,192,192,0.4)',
                        borderColor: 'rgba(204,17,4,1)',
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: 'rgba(204,17,4,1)',
                        pointBackgroundColor: '#fff',
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                        pointHoverBorderColor: 'rgba(220,220,220,1)',
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: props.yAxisDeath
                    }
                ]
            }} />

        </div>
    )
}

export default LineGraphDeaths