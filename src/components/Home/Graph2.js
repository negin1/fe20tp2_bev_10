import { daysHandler } from '../NewGraph/api';
import React, { useEffect, useState } from 'react';
import axios from 'axios'


const Graph2 = (props) => {

    console.log(props.country, props.days, props.type, props.graph);
    //console.log(props.days)
    //const timePeriod = daysHandler(props.days)
    //console.log(timePeriod)


    return (
        <div>
            <br></br>
            <p>Hello from Graph</p>
            <br></br>
            <br></br>
            <p>type of data from props: {props.type}</p>
            <br></br>
            <p>country from props: {props.country}</p>
            <br></br>
            <p>number of days from props: {props.days}</p>
            <br></br>
            <p>graph from props: {props.graph}</p>
            <br></br>
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