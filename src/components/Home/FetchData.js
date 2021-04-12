import { daysHandler } from '../NewGraph/api';
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Graph from './Graph';


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
    }, [props.country, props.type, props.days, props.graph]);
    return (
        data ? <Graph data={data} country={props.country} type={props.type} graph={props.graph} /> : null
    )
}

export default FetchData;