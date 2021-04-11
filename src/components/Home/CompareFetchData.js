import { daysHandler } from '../NewGraph/api';
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import CompareGraph from './CompareGraph';


const CompareFetchData = (props) => {
    const [data, setData] = useState(null)
    const [data2, setData2] = useState(null)
    const [data3, setData3] = useState(null)
    const timePeriod = daysHandler(props.days)
    console.log(timePeriod)

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
                setData({ dataCount, labels })
            })

            .catch((error) => {
                //console.log(error)
            })
            ;
        setTimeout(() => {
            axios.get(
                `https://api.covid19api.com/country/${props.country2}/status/${props.type}?from=${timePeriod.from}T00:00:00Z&to=${timePeriod.to}T00:00:00Z`
            )
                .then((res) => {
                    console.log(res)
                    let data = res.data.filter(item => item.Province === '');
                    data = data.slice(0, data.length - 1);

                    const dataCount = data.map((d) => d.Cases)
                    const labels = data.map(d => d.Date)
                    setData2({ dataCount, labels })
                })

                .catch((error) => {
                    //console.log(error)
                })
                ;
        }, 1000);
        setTimeout(() => {
            axios.get(
                `https://api.covid19api.com/country/${props.country3}/status/${props.type}?from=${timePeriod.from}T00:00:00Z&to=${timePeriod.to}T00:00:00Z`
            )
                .then((res) => {
                    console.log(res)
                    let data = res.data.filter(item => item.Province === '');
                    data = data.slice(0, data.length - 1);

                    const dataCount = data.map((d) => d.Cases)
                    const labels = data.map(d => d.Date)
                    setData3({ dataCount, labels })
                })

                .catch((error) => {
                })
                ;
        }, 2000);

    }, [props.country, props.country2, props.country3, props.type, props.days, props.graph]);


    return (
        data && data2 && data3 ? <CompareGraph data={data} data2={data2} data3={data3} country={props.country} country2={props.country2} country3={props.country3} type={props.type} graph={props.graph} /> : null
    )
}

export default CompareFetchData;