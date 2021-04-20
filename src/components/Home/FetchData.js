import { daysHandler } from './DaysHandler.js';
import React, { useEffect, useState } from 'react';
import Styled from 'styled-components';
import axios from 'axios'
import Graph from './Graph';

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


const FetchData = (props) => {
    const [data, setData] = useState(null)
    const timePeriod = daysHandler(props.days)
    const [setCountry] = useState('');
    const [setGraph] = useState('');
    const [setType] = useState('');


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
    const handleClick = () => {
        let graphList = JSON.parse(localStorage.getItem('allGraphs')) || [];
        alert(`Your graph has been saved. click dashboard buttun to see your saved graphs`);

        const graphObj = {
            id: Date.now(),
            country: props.country,
            graph: props.graph,
            type: props.type,
            days: props.days,
        }

        graphList.push(graphObj);

        localStorage.setItem('allGraphs', JSON.stringify(graphList))
    }
    return (
        data ? (
            <><Graph data={data} country={props.country} type={props.type} graph={props.graph} />
                {!props.saved && <StyledButtonSave onClick={handleClick} style={{ outline: '0' }} >Save graph to Dashboard</StyledButtonSave>}
            </>) : null
    )
}

export default FetchData;