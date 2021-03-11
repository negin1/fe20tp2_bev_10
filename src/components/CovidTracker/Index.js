import React, { useEffect, useState } from "react";
import styled from "styled-components";
import LineGraph from "./LineGraph";
import CovidSummary from "./CovidSummary";
import axios from './axios';

const StyledDiv = styled.div`
  text-align: center;
`;

function CovidTracker() {

  const [totalConfirmed, setTotalConfirmed] = useState(0);
  const [totalRecovered, setTotalRecovered] = useState(0);
  const [totalDeaths, setTotalDeaths] = useState(0);
  const [loading, setLoading] = useState(false);
  const [CovidSummary, setCovidSummary] = useState({});
  const [days, setDays] = useState(7);
  const [country, setCountry] = useState('');

  //ComponentDidMount
  useEffect(() => {

    //setLoading(true);
    axios.get(`/summary`)
      .then(res => {
        //setLoading(false);

        if (res.status === 200) {
          setTotalConfirmed(res.data.Global.TotalConfirmed);
          setTotalRecovered(res.data.Global.TotalRecovered);
          setTotalDeaths(res.data.Global.TotalDeaths);
          setCovidSummary(res.data);
        }

        console.log(res);
      })
      .catch(error => {
        console.log(error)
      })


  }, []);

  const countryHandler = (e) => {
    setCountry(e.target.value);
  }

  const daysHandler = (e) => {
    setDays(e.target.value);
  }

  if (loading) {
    return <p> Fetchind gata from api...</p>
  }


  return (
    <StyledDiv>
      <CovidSummary
        totalConfirmed={totalConfirmed}
        totalRecovered={totalRecovered}
        totalDeaths={totalDeaths}
        country={''}
      />

      <div>
        <select value={country} onChange={countryHandler}>
          {
            covidSummary.Countries && covidSummary.Countries.map(country =>
              <option key={country.Slug} value={country.Slug}>{country.Country}</option>
            )
          }
        </select>
        <select value={days} onChange={daysHandler} >
          <option value="7">Last 7 days</option>
          <option value="30">Last 30 days</option>
          <option value="90">Last 90 days</option>
        </select>
      </div>
      <LineGraph />
    </StyledDiv>
  );
}

export default CovidTracker;
