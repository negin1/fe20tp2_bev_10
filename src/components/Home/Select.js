import styled from 'styled-components';
import React, { useRef, useState } from 'react';
import FetchData from './FetchData';
import COUNTRYLIST from './countryData.js';
import BottomNav from '../BottomNav'

export const StyledDivForm = styled.div`
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
    border-radius: 50px;
    outline-style:none;
    &:hover {
      cursor: pointer;
      background: darkgray;
      }
    }
    `;

const StyledIntro = styled.div`
  text-align: center;
    `

const Select = () => {
    const [submit, setSubmit] = useState(false);
    const [country, setCountry] = useState('');
    const [type, setType] = useState('');
    const [days, setDays] = useState('');
    const [graph, setGraph] = useState('');
    const graphRef = useRef();


    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmit(true);
        graphRef.current.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <div>
            <div ref={graphRef}>
                {(submit && country && type && days && graph && <FetchData country={country} type={type} days={days} graph={graph} />)}
            </div>

            <StyledIntro>
                <h2>Select and view covid-19 data per country</h2>
                <p>Please fill in the details bellow to render your graph</p>

            </StyledIntro>

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
                    <button value="Submit" >Render my graph</button>
                </form>
            </StyledDivForm>
            <BottomNav />
        </div>
    );
}

export default Select;