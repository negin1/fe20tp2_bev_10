import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
//import axios from 'axios';
import CompareFetchData from './CompareFetchData';
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
    const [country, setCountry] = useState('sweden');
    const [country2, setCountry2] = useState('norway');
    const [country3, setCountry3] = useState('denmark');
    const [type, setType] = useState('confirmed');
    const [graph, setGraph] = useState('line');
    const days = '365';


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
        console.log(country, country2, days)
        setSubmit(true);

    }

    return (
        <div>
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
                        <label>First country:</label>
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
                    <div>
                        <label>Second country:</label>
                        <select value={country2}
                            onChange={(e) => setCountry2(e.target.value)}>
                            <option value='' disabled>Select country</option>

                            {COUNTRYLIST.Countries.map((country2) => (
                                <option key={country2.Slug} value={country2.Slug}>
                                    {country2.Country}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label>Third country:</label>
                        <select value={country3}
                            onChange={(e) => setCountry3(e.target.value)}>
                            <option value='' disabled>Select country</option>

                            {COUNTRYLIST.Countries.map((country3) => (
                                <option key={country3.Slug} value={country3.Slug}>
                                    {country3.Country}
                                </option>
                            ))}
                        </select>
                    </div>
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
                {(country && type && days && graph && <CompareFetchData country={country} country2={country2} country3={country3} type={type} days={days} graph={graph} />)}
            </div>
        </div>
    );
}

export default Select