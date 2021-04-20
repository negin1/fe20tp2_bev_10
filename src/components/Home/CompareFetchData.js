import React, { useEffect, useState } from 'react';
import axios from 'axios'
import CompareGraph from './CompareGraph';
import { daysHandler } from './DaysHandler.js';
import Styled from 'styled-components';

const StyledButtonSave = Styled.button`
    display: block;
    margin: 10px auto;
    width: 135px;
    height: 40px; 
    color: white;
    background: black;
    border: none;
    border-radius: 20px;
    &:hover {
      cursor: pointer;
      background: darkgray;
    }
      `;

const CompareFetchData = (props) => {
    const [data, setData] = useState(null)
    const [data2, setData2] = useState(null)
    const [data3, setData3] = useState(null)
    const timePeriod = daysHandler(props.days)
    const [setCountry] = useState('');
    const [setCountry2] = useState('');
    const [setCountry3] = useState('');

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
        alert(`Your graph has been saved. Click dashboard buttun to see your saved graphs`);


        const graphObj = {
            id: Date.now(),
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
                {!props.saved && <StyledButtonSave onClick={handleClick} style={{ outline: '0' }} >Save graph to dashboard</StyledButtonSave>}
            </>) : null
    )
}

export default CompareFetchData;