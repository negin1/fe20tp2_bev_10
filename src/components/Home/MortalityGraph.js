
import React from 'react';
import { Line, Bar } from 'react-chartjs-2';
import StyledLineGraph from '../Styles/StyledLineGraph';
import { capitalizeFirstLetter } from './DaysHandler';

const MortalityGraph = (props) => {

    const country = props.country

    let deathCountArr = props.dataDeaths.dataCount;
    console.log(deathCountArr);

    let confirmedCountArr = props.dataConfirmed.dataCount;
    console.log(confirmedCountArr);

    var i;
    let mortalityArr = [];
    for (i = 0; i < deathCountArr.length; i++) {
        mortalityArr[i] = 100 * deathCountArr[i] / confirmedCountArr[i];
    }

    if (props.graph === 'line') {
        return (
            <div>
                <br></br>
                <StyledLineGraph>
                    <Line data={{
                        labels: props.dataDeaths.labels.map(l => l.substring(0, 10)),
                        datasets: [
                            {
                                label: 'Mortality rate of infected in ' + capitalizeFirstLetter(country),
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
                                data: mortalityArr,
                            },
                        ]
                    }} options={{
                        responsive: true,
                        maintainAspectRatio: false,
                        scales: {
                            yAxes: [{
                                scaleLabel: {
                                    display: true,
                                    labelString: 'Percent'
                                }
                            }],
                            xAxes: [{
                                scaleLabel: {
                                    display: true,
                                    labelString: 'Days'
                                }
                            }],
                        }

                    }}
                    />
                </StyledLineGraph>
            </div>
        );

    } else {
        return (
            <StyledLineGraph>
                <Bar data={{
                    labels: props.dataDeaths.labels.map(l => l.substring(0, 10)),
                    datasets: [{
                        label: 'Mortality rate of infected in ' + capitalizeFirstLetter(country),
                        data: mortalityArr,
                        backgroundColor: 'rgb(255, 99, 132)',
                        borderColor: 'rgb(255, 99, 132)',
                        borderWidth: 1
                    }]
                }} options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        yAxes: [{
                            scaleLabel: {
                                display: true,
                                labelString: 'Percent'
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

export default MortalityGraph;