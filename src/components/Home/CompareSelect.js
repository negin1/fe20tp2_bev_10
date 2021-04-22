import styled from 'styled-components';
import React, { useRef, useState } from 'react';
import CompareFetchData from './CompareFetchData';
import COUNTRYLIST from './countryData.js';
import BottomNav from '../BottomNav'


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
const StyledIntro = styled.div`
  text-align: center;
    `
const CompareSelect = () => {
    const [submit, setSubmit] = useState(false);
    const [country, setCountry] = useState('');
    const [country2, setCountry2] = useState('');
    const [country3, setCountry3] = useState('');
    const [type, setType] = useState('');
    const [graph, setGraph] = useState('');
    const graphRef = useRef();
    const days = '365';


    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmit(true);
        graphRef.current.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <div>
            <div ref={graphRef}>
                {(submit && country && country2 && country3 && type && days && graph && <CompareFetchData country={country} country2={country2} country3={country3} type={type} days={days} graph={graph} />)}
            </div>

            <StyledIntro>
                <h2>Compare data from three countries (last 365 days)</h2>
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
                        <label>First country:</label>
                        <select value={country}
                            onChange={(e) => setCountry(e.target.value)}>
                            <option value='' disabled>Select country 1</option>

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
                            <option value='' disabled>Select country 2</option>

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
                            <option value='' disabled>Select country 3</option>

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
                    <button value="Submit" style={{ outline: '0' }} >Render my graph</button>
                </form>
            </StyledDivForm>
            <BottomNav />
        </div>
    );
}

export default CompareSelect