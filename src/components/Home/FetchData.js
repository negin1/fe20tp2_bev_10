import { daysHandler } from './DaysHandler.js';
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Graph from './Graph';


const FetchData = (props) => {
    const [data, setData] = useState(null)
    const timePeriod = daysHandler(props.days)
    const [country, setCountry] = useState('');
    const [graph, setGraph] = useState('');
    const [type, setType] = useState('');
    const [days, setDays] = useState('');


    // read saved graphs from localstorage
    // push props as an object into the array
    // save the array to LS
    //const [country, setCountry] = useState('');
    //gör ett api anrop


    let graphList = [],

        graphObj = {
            "country": country,
            "graph": graph,
            "type": type,
            "data": data,
            id: Date.now(),
        }

    graphList.push(graphObj);

    localStorage.setItem('allGraphs', JSON.stringify(graphList))


    useEffect(() => {

        axios.get(
            `https://api.covid19api.com/country/${props.country}/status/${props.type}?from=${timePeriod.from}T00:00:00Z&to=${timePeriod.to}T00:00:00Z`
        )
            .then((res) => {
                console.log(res)
                let data = res.data.filter(item => item.Province === '');
                data = data.slice(0, data.length - 1);

                const dataCount = data.map((d) => d.Cases)
                const labels = data.map(d => d.Date)
                const country = props.country
                const graph = props.graph
                const type = props.type

                setData({ dataCount, labels })
                setGraph(graph)
                setCountry(country)
                setType(type)
            })

            .catch((error) => {
                //console.log(error)
            });

    }, [props.country, props.type, props.days, props.graph]);
    return (
        data ? <Graph data={data} country={props.country} type={props.type} graph={props.graph} /> : null
    )
}

export default FetchData;