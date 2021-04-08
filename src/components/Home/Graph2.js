import { daysHandler } from '../NewGraph/api';
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Line } from 'react-chartjs-2';
import StyledLineGraph from '../Styles/StyledLineGraph';



const Graph2 = (props) => {
    console.log(props.data);
    //console.log(props.days)
    //const timePeriod = daysHandler(props.days)
    //console.log(timePeriod)


    return (
        <div>
            <br></br>

            <StyledLineGraph>
                <Line data={{
                    labels: [props.data.labels],
                    datasets: [
                        {
                            label: props.type,
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
                            data: [props.data.dataCount],
                        },
                    ]
                }} />
            </StyledLineGraph>

        </div>
    );
}

const FetchData = (props) => {
    const [data, setData] = useState(null)
    const timePeriod = daysHandler(props.days)
    console.log(timePeriod)
    //const [country, setCountry] = useState('');
    //gör ett api anrop
    useEffect(() => {
        console.log('https://api.covid19api.com/country/albania/status/confirmed?from=2021-03-31T00:00:00Z&to=2021-04-7T00:00:00Z')
        console.log(`https://api.covid19api.com/country/${props.country}/status/${props.type}?from=${timePeriod.from}T00:00:00Z&to=${timePeriod.to}T00:00:00Z`)
        axios.get(
            `https://api.covid19api.com/country/${props.country}/status/${props.type}?from=${timePeriod.from}T00:00:00Z&to=${timePeriod.to}T00:00:00Z`
        )
            .then((res) => {
                console.log(res)
                let data = res.data.filter(item => item.Province === '');
                data = data.slice(0, data.length - 1);

                const dataCount = data.map((d) => d.Cases)
                const labels = data.map(d => d.Date)
                setData({ dataCount, labels })
            })

            .catch((error) => {
                //console.log(error)
            })

            ;
    }, [props.country]);
    return (
        data ? <Graph2 data={data} /> : null
    )
}

/*const getCoronaReportByDateRange = (countrySlug, from, to) => {
    axios.get(
        `/country/${countrySlug}/status/confirmed?from=${from}T00:00:00Z&to=${to}T00:00:00Z`
    )
        .then((res) => {
            //console.log(res)
            let data = res.data.filter(item => item.Province === '');
            data = data.slice(0, data.length - 1);

            //const yAxisCoronaCount = res.data.map((d) => d.Cases)
            //const xAxisLabel = res.data.map(d => d.Date)
            const covidDetails = covidSummary.Countries.find(country => country.Slug === countrySlug)
            // begin krilles specialkod
            //console.log(data)
            const yAxisCoronaCount = data.map((d) => d.Cases)
            const xAxisLabel = data.map(d => d.Date)


            // end
            setCoronaCountAr(yAxisCoronaCount)
            setTotalConfirmed(covidDetails.TotalConfirmed);
            setTotalRecovered(covidDetails.TotalRecovered);
            setTotalDeaths(covidDetails.TotalDeaths);
            setLabel(xAxisLabel);
        })

        .catch((error) => {
            //console.log(error)
        })
}*/

export default FetchData;