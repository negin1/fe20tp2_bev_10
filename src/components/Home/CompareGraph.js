
import React from 'react';
import { Line, Bar } from 'react-chartjs-2';
import StyledLineGraph from '../Styles/StyledLineGraph';

const CompareGraph = (props) => {
    console.log(props.data.labels, props.data.dataCount, props.data2.dataCount, props.country, props.country2, props.type, props.graph)

    if (props.graph === 'line') {
        return (
            <div>
                <br></br>
                <StyledLineGraph>
                    <Line data={{
                        labels: props.data.labels.map(l => l.substring(0, 10)),
                        datasets: [
                            {
                                label: props.country,
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
                                data: props.data.dataCount,
                            }, {
                                label: props.country2,
                                fill: false,
                                lineTension: 0.1,
                                backgroundColor: 'rgb(255, 99, 132)',
                                borderColor: 'rgb(255, 99, 132)',
                                borderCapStyle: 'butt',
                                borderDash: [],
                                borderDashOffset: 0.0,
                                borderJoinStyle: 'miter',
                                pointBorderColor: 'rgb(255, 99, 132)',
                                pointBackgroundColor: '#fff',
                                pointBorderWidth: 1,
                                pointHoverRadius: 5,
                                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                                pointHoverBorderColor: 'rgba(220,220,220,1)',
                                pointHoverBorderWidth: 2,
                                pointRadius: 1,
                                pointHitRadius: 10,
                                data: props.data2.dataCount,
                            },
                            {
                                label: props.country3,
                                fill: false,
                                lineTension: 0.1,
                                backgroundColor: 'rgb(118, 15, 209)',
                                borderColor: 'rgb(118, 15, 209)',
                                borderCapStyle: 'butt',
                                borderDash: [],
                                borderDashOffset: 0.0,
                                borderJoinStyle: 'miter',
                                pointBorderColor: 'rgb(118, 15, 209)',
                                pointBackgroundColor: '#fff',
                                pointBorderWidth: 1,
                                pointHoverRadius: 5,
                                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                                pointHoverBorderColor: 'rgba(220,220,220,1)',
                                pointHoverBorderWidth: 2,
                                pointRadius: 1,
                                pointHitRadius: 10,
                                data: props.data3.dataCount,
                            },
                        ]
                    }} options={{
                        scales: {
                            yAxes: [{
                                scaleLabel: {
                                    display: true,
                                    labelString: 'Total ' + props.type
                                }
                            }],
                            xAxes: [{
                                scaleLabel: {
                                    display: true,
                                    labelString: 'Days'
                                }
                            }],
                        }

                    }} />
                </StyledLineGraph>
            </div>
        );

    } else {
        return (
            <StyledLineGraph>
                <Bar data={{
                    labels: props.data.labels.map(l => l.substring(0, 10)),
                    datasets: [
                        {
                            label: props.country,
                            data: props.data.dataCount,
                            backgroundColor: 'rgba(75,192,192,1)',
                            borderColor: 'rgba(75,192,192,1)',
                            borderWidth: 1
                        },
                        {
                            label: props.country2,
                            data: props.data2.dataCount,
                            backgroundColor: 'rgb(255, 99, 132)',
                            borderColor: 'rgb(255, 99, 132)',
                            borderWidth: 1
                        },
                        {
                            label: props.country3,
                            data: props.data3.dataCount,
                            backgroundColor: 'rgb(118, 15, 209)',
                            borderColor: 'rgb(118, 15, 209)',
                            borderWidth: 1
                        }
                    ],

                }} options={{
                    scales: {
                        yAxes: [{
                            scaleLabel: {
                                display: true,
                                labelString: 'Total ' + props.type
                            }
                        }],
                        xAxes: [{
                            scaleLabel: {
                                display: true,
                                labelString: 'Days'
                            }
                        }],
                    }

                }} />
            </StyledLineGraph>
        );
    }
}

export default CompareGraph;