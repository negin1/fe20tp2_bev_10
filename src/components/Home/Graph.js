
import React from 'react';
import { Line, Bar } from 'react-chartjs-2';
import StyledLineGraph from '../Styles/StyledLineGraph';
import { capitalizeFirstLetter } from './DaysHandler';


const Graph = (props) => {
    const country = props.country




    const graphObj = {
        "country": country,
        "graph": graph,
        "type": type,
        "data": data,
        id: Date.now(),
    }



    graphList.push(graphObj);

    localStorage.setItem('allGraphs', JSON.stringify(graphList))
}


if (props.graph === 'line') {
    return (
        <div>
            <br></br>
            <StyledLineGraph>
                <Line data={{
                    labels: props.data.labels.map(l => l.substring(0, 10)),
                    datasets: [
                        {
                            label: capitalizeFirstLetter(country),
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
                        },
                    ]
                }}
                    options={{
                        responsive: true,
                        maintainAspectRatio: false,
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
        <div>
            <StyledLineGraph>
                <Bar data={{
                    labels: props.data.labels.map(l => l.substring(0, 10)),
                    datasets: [{
                        label: capitalizeFirstLetter(country),
                        data: props.data.dataCount,
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
}
}

export default Graph;