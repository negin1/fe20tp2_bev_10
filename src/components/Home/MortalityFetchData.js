import React, { useEffect, useState } from 'react';
import axios from 'axios'
import MortalityGraph from './MortalityGraph';
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
    outline:0;
    &:hover {
      cursor: pointer;
      background: darkgray;
    }
      `;

const MortalityFetchData = (props) => {
    const [dataDeaths, setDataDeaths] = useState(null)
    const [dataConfirmed, setDataConfirmed] = useState(null)
    const timePeriod = daysHandler(props.days)


    useEffect(() => {
        axios.get(
            `https://api.covid19api.com/country/${props.country}/status/${props.typeDeaths}?from=${timePeriod.from}T00:00:00Z&to=${timePeriod.to}T00:00:00Z`
        )
            .then((res) => {
                let data = res.data.filter(item => item.Province === '');
                data = data.slice(0, data.length - 1);

                const dataCount = data.map((d) => d.Cases)
                const labels = data.map(d => d.Date)
                setDataDeaths({ dataCount, labels })
            })

            .catch((error) => {
            })
            ;
        setTimeout(() => {
            axios.get(
                `https://api.covid19api.com/country/${props.country}/status/${props.typeConfirmed}?from=${timePeriod.from}T00:00:00Z&to=${timePeriod.to}T00:00:00Z`
            )
                .then((res) => {
                    console.log(res)
                    let data = res.data.filter(item => item.Province === '');
                    data = data.slice(0, data.length - 1);

                    const dataCount = data.map((d) => d.Cases)
                    const labels = data.map(d => d.Date)
                    setDataConfirmed({ dataCount, labels })
                })

                .catch((error) => {
                })
                ;
        }, 1000);
    }, [props.country, props.typeDeaths, props.typeConfirmed, props.days, props.graph]);

    const handleClick = () => {

        let graphList = JSON.parse(localStorage.getItem('MortalityGraph')) || [];
        alert(`Your graph has been saved. click dashboard button to see your saved graphs`);


        const graphObj = {
            id: Date.now(),
            country: props.country,
            typeDeaths: props.typeDeaths,
            graph: props.graph,
            typeConfirmed: props.typeConfirmed,
            days: props.days,
        }



        graphList.push(graphObj);

        localStorage.setItem('MortalityGraph', JSON.stringify(graphList))
    }
    return (
        dataDeaths && dataConfirmed ? (
            <> <MortalityGraph dataDeaths={dataDeaths} dataConfirmed={dataConfirmed} country={props.country} graph={props.graph} />
                {!props.saved && <StyledButtonSave onClick={handleClick}>Save graph to dashboard</StyledButtonSave>}</>) : null
    )
}

export default MortalityFetchData;