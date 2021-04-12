import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
//import axios from 'axios';
import FetchData from './FetchData';
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


const Select = () => {
    const [submit, setSubmit] = useState(false);
    const [country, setCountry] = useState('');
    const [type, setType] = useState('');
    const [days, setDays] = useState('');
    const [graph, setGraph] = useState('');


    /*useEffect(() => {
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
    }, [])*/

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmit(true);

    }

    return (
        <div>
            <div>
                {(submit && country && type && days && graph && <FetchData country={country} type={type} days={days} graph={graph} />)}
            </div>
            <StyledDivForm>

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
                    </div>
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
        </div>
    );
}

export default Select