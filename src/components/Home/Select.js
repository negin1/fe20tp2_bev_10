import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FetchData from './Graph2';
import { getReportByDateRange } from '../NewGraph/api';

const url = 'https://api.covid19api.com/'
const summaryUrl = 'https://api.covid19api.com/summary'


const StyledDiv = styled.div`
    margin: 50px; 
    display: flex;
    width: 400px; 

    label {
    display: block; 
    }

    select {
    padding: 5px;
    width: 250px;
    margin-top: 10px; 
    margin-bottom: 20px; 
    font-size: 18px; 
    }

    p {
        display: inline; 
        margin-left: 20px; 
    }

    button {
        display: block;
         margin-top: 10px;
         width: 120px;
         height: 30px; 
    }
    `;


export const Select = () => {
    const [covidSummary, setCovidSummary] = useState({})
    const [country, setCountry] = useState('');
    const [type, setType] = useState('');
    const [days, setDays] = useState('');
    const [graph, setGraph] = useState('');


    useEffect(() => {
        //setLoading(true);
        axios
            .get(summaryUrl)
            .then((res) => {
                //setLoading(false);

                if (res.status === 200) {
                    setCovidSummary(res.data)
                }
            })
            .catch((error) => {
            })
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        const selection = { country, type, days, graph }
        console.log(selection)
    }

    return (
        <div>
            <div>
                <h3>Select your data:</h3>
                <StyledDiv>
                    <form onSubmit={handleSubmit}>
                        <label>Covid-19 data:</label>
                        <div>
                            <select value={type}
                                onChange={(e) => setType(e.target.value)}>
                                <option value='' disabled>Select type of data</option>
                                <option value='confirmed'>Infected</option>
                                <option value='deaths'>Deaths</option>
                                <option value='recovered'>Recovered</option>
                            </select>
                            <p>{type}</p>
                        </div>
                        <div>
                            <label>Country:</label>
                            <select value={country}
                                onChange={(e) => setCountry(e.target.value)}>

                                {covidSummary.Countries &&
                                    covidSummary.Countries.map((country) => (
                                        <option key={country.Slug} value={country.Slug}>
                                            {country.Country}
                                        </option>
                                    ))}
                            </select>
                            <p>{country}</p>
                        </div>
                        <label>Days:</label>
                        <select value={days}
                            onChange={(e) => setDays(e.target.value)}>
                            <option value='' disabled>Select time period</option>
                            <option value='7'>Last 7 days</option>
                            <option value='90'>Last 90 days</option>
                            <option value='365'>Last 365 days</option>
                        </select>
                        <p>{days}</p>
                        <label>Type of graph:</label>
                        <select value={graph}
                            onChange={(e) => setGraph(e.target.value)}>
                            <option value='' disabled>Select type of graph</option>
                            <option value="linegraph">Line graph</option>
                            <option value="bubble">Bubble graph</option>
                        </select>
                        <p>{graph}</p>
                        <button>Render my graph</button>
                    </form>
                </StyledDiv>
                {(country && type && days && graph && <FetchData country={country} type={type} days={days} graph={graph} />)}
            </div>
        </div >
    );
}

export default Select;