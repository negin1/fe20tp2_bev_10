import React, { useEffect, useState } from 'react';
import axios from 'axios'
import CompareGraph from './CompareGraph';
import { daysHandler } from './DaysHandler.js';


const CompareFetchData = (props) => {
    const [data, setData] = useState(null)
    const [data2, setData2] = useState(null)
    const [data3, setData3] = useState(null)
    const timePeriod = daysHandler(props.days)
    const [country, setCountry] = useState('');
    const [country2, setCountry2] = useState('');
    const [country3, setCountry3] = useState('');

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
                setData({ dataCount, labels })
                setCountry(country)
            })

            .catch((error) => {
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
                    const country2 = props.country2
                    setData2({ dataCount, labels })
                    setCountry2(country2)
                })

                .catch((error) => {
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
                    const country3 = props.country3
                    setData3({ dataCount, labels })
                    setCountry3(country3)
                })

                .catch((error) => {
                })
                ;
        }, 2000);

    }, [props.country, props.country2, props.country3, props.type, props.days, props.graph]);
    const handleClick = () => {

        let graphCompareList = JSON.parse(localStorage.getItem('allCompareGraphs')) || [];

        const graphObj = {
            country: props.country,
            country2: props.country2,
            country3: props.country3,
            graph: props.graph,
            type: props.type,
            days: props.days,
        }


        graphCompareList.push(graphObj);

        localStorage.setItem('allCompareGraphs', JSON.stringify(graphCompareList))
    }


    return (

        data && data2 && data3 ? (
            <><CompareGraph data={data} data2={data2} data3={data3} country={props.country} country2={props.country2} country3={props.country3} type={props.type} graph={props.graph} />
                {!props.saved && <button onClick={handleClick}>Save graph test to dashboard</button>}
            </>) : null
    )
}

export default CompareFetchData;