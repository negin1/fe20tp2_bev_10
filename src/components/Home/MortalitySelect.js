import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
//import axios from 'axios';
import MortalityFetchData from './MortalityFetchData';
import COUNTRYLIST from './countryData.js';

const url = 'https://api.covid19api.com/'
const summaryUrl = 'https://api.covid19api.com/summary'



const StyledDivForm = styled.div`
    margin: 50px auto; 
    display: flex;
    justify-content: center;
    width: 350px; 

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
    }
    `;


const MortalitySelect = () => {
    const [submit, setSubmit] = useState(false);
    const [country, setCountry] = useState('sweden');
    const [days, setDays] = useState('7');
    const [graph, setGraph] = useState('line');

    const typeDeaths = 'deaths';
    const typeConfirmed = 'confirmed';


    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmit(true);

    }

    return (
        <div>
            <StyledDivForm>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Country:</label>
                        <select value={country}
                            onChange={(e) => setCountry(e.target.value)}>
                            <option value='' disabled>Select country</option>

                            {COUNTRYLIST.Countries.map((country) => (
                                <option key={country.Slug} value={country.Slug}>
                                    {country.Country}
                                </option>
                            ))}
                        </select>
                    </div>
                    <label>Days:</label>
                    <select value={days}
                        onChange={(e) => setDays(e.target.value)}>
                        <option value='' disabled>Select time period</option>
                        <option value='7'>Last 7 days</option>
                        <option value='90'>Last 90 days</option>
                        <option value='365'>Last 365 days</option>
                    </select>
                    <label>Type of graph:</label>
                    <select value={graph}
                        onChange={(e) => setGraph(e.target.value)}>
                        <option value='' disabled>Select type of graph</option>
                        <option value="line">Line graph</option>
                        <option value="bar">Bar graph</option>
                    </select>
                    <button value="Submit">Render my graph</button>
                </form>
            </StyledDivForm>
            <div>
                {(country && days && graph && <MortalityFetchData country={country} typeDeaths={typeDeaths} typeConfirmed={typeConfirmed} days={days} graph={graph} />)}
            </div>
        </div>
    );
}

export default MortalitySelect