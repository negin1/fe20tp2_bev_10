import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import LineGraph from './LineGraph'
import LineGraphDeaths from './LineGraphDeaths'
import LineGraphRecovered from './LineGraphRecovered'
import CovidSummary from './CovidSummary'
import axios from './axios'

const StyledDiv = styled.div`
  text-align: center;
`;

const StyledSelectCountry = styled.select`
  margin-top: 30px; 
  padding: 5px; 
`;

const StyledSelectDays = styled.select`
  margin-top: 15px; 
  padding: 5px; 
`;

const userConfig = {
  dateRange: '7d', // '30d', '365d'
  countries: ['Denmark', 'Sweden', 'China', 'Taiwan'],
  infected: true,
  deaths: false,
  recovered: false
}

const countryPresets = {
  Scandinavia: ['denmark', 'sweden'],
  Americas: ['united-states', 'canada'],
  Asia: ['china', 'taiwan']
}

const ArrCountryPresets = Object.keys(countryPresets);
console.log(ArrCountryPresets);

// event.target.value (='Asia')
// countryPresets[event.target.value] --> ['China', 'Taiwan']

function PresetCovid(props) {
  const [totalConfirmed, setTotalConfirmed] = useState(0)
  const [totalRecovered, setTotalRecovered] = useState(0)
  const [totalDeaths, setTotalDeaths] = useState(0)
  const [loading, setLoading] = useState(false)
  const [covidSummary, setCovidSummary] = useState({})
  const [days, setDays] = useState(7)
  const [country, setCountry] = useState('')
  const [region, setRegion] = useState('')
  const [coronaCountAr, setCoronaCountAr] = useState([])
  const [deathCountAr, setDeathCountAr] = useState([])
  const [recoveredCountAr, setRecoveredCountAr] = useState([])
  const [label, setLabel] = useState([])

  //ComponentDidMount
  useEffect(() => {
    setTimeout(() => {
      //setLoading(true);
      axios
        .get(`/summary`)
        .then((res) => {
          //setLoading(false);

          if (res.status === 200) {
            setTotalConfirmed(res.data.Global.TotalConfirmed)
            setTotalRecovered(res.data.Global.TotalRecovered)
            setTotalDeaths(res.data.Global.TotalDeaths)
            setCovidSummary(res.data)
          }

          console.log(res)
          setCountry(props.country)
          const d = new Date()
          const to = fromatDate(d)
          const from = fromatDate(d.setDate(d.getDate() - days))

          //console.log(from, to)
          getCoronaReportByDateRange(props.country, from, to)
          getDeathReportByDateRange(props.country, from, to)
          getRecoveredReportByDateRange(props.country, from, to)
        })
        .catch((error) => {
          console.log(error)
        })

    }, props.order * 4000);
  }, [])

  const fromatDate = (date) => {
    const d = new Date(date)
    //2021-03-09;
    const year = d.getFullYear()
    const month = `0${d.getMonth() + 1}`.slice(-2)
    const _date = d.getDate()
    return `${year}-${month}-${_date}`
  }

  const regionHandler = (e) => {
    let arrRegionCountries = countryPresets[e.target.value]
    setRegion(arrRegionCountries)
    console.log(arrRegionCountries)
  }

  const countryHandler = (e) => {
    setCountry(e.target.value)
    const d = new Date()
    const to = fromatDate(d)
    const from = fromatDate(d.setDate(d.getDate() - days))

    //console.log(from, to)
    getCoronaReportByDateRange(e.target.value, from, to)
    getDeathReportByDateRange(e.target.value, from, to)
    getRecoveredReportByDateRange(e.target.value, from, to)
  }

  const daysHandler = (e) => {
    setDays(e.target.value);
    const d = new Date()
    const to = fromatDate(d)
    const from = fromatDate(d.setDate(d.getDate() - e.target.value))

    getCoronaReportByDateRange(country, from, to)
    getDeathReportByDateRange(country, from, to)
    getRecoveredReportByDateRange(country, from, to)
  }

  const getCoronaReportByDateRange = (countrySlug, from, to) => {
    console.log("from: " + from + ", to: " + to)
    axios.get(
      `/country/${countrySlug}/status/confirmed?from=${from}T00:00:00Z&to=${to}T00:00:00Z`
    )
      .then((res) => {
        console.log(res)
        let data = res.data.filter(item => item.Province === '');
        data = data.slice(0, data.length - 1);

        //const yAxisCoronaCount = res.data.map((d) => d.Cases)
        //const xAxisLabel = res.data.map(d => d.Date)
        const covidDetails = covidSummary.Countries.find(country => country.Slug === countrySlug)
        // begin krilles specialkod
        console.log(data)
        const yAxisCoronaCount = data.map((d) => d.Cases)
        const xAxisLabel = data.map(d => d.Date)


        // end
        setCoronaCountAr(yAxisCoronaCount)
        setTotalConfirmed(covidDetails.TotalConfirmed);
        setTotalRecovered(covidDetails.TotalRecovered);
        setTotalDeaths(covidDetails.TotalDeaths);
        console.log(xAxisLabel)
        setLabel(xAxisLabel);
      })

      .catch((error) => {
        console.log(error)
      })
  }

  const getDeathReportByDateRange = (countrySlug, from, to) => {
    axios.get(
      `/country/${countrySlug}/status/deaths?from=${from}T00:00:00Z&to=${to}T00:00:00Z`
    )
      .then((res) => {
        console.log(res)
        let data = res.data.filter(item => item.Province === '');
        data = data.slice(0, data.length - 1);
        const yAxisDeathCount = data.map((d) => d.Cases)
        //const xAxisLabel = data.map(d => d.Date)
        //const covidDetails = covidSummary.Countries.find(country => country.Slug === countrySlug)

        setDeathCountAr(yAxisDeathCount)
        //setTotalConfirmed(covidDetails.TotalConfirmed);
        //setTotalDeaths(covidDetails.TotalDeaths);
        //setLabel(xAxisLabel);
      })

      .catch((error) => {
        console.log(error)
      })
  }

  const getRecoveredReportByDateRange = (countrySlug, from, to) => {
    axios.get(
      `/country/${countrySlug}/status/recovered?from=${from}T00:00:00Z&to=${to}T00:00:00Z`
    )
      .then((res) => {
        console.log(res)
        let data = res.data.filter(item => item.Province === '');
        data = data.slice(0, data.length - 1);
        const yAxisRecoveredCount = data.map((d) => d.Cases)
        //const xAxisLabel = data.map(d => d.Date)
        //const covidDetails = covidSummary.Countries.find(country => country.Slug === countrySlug)

        setRecoveredCountAr(yAxisRecoveredCount)
        //setTotalConfirmed(covidDetails.TotalConfirmed);
        //setTotalDeaths(covidDetails.TotalDeaths);
        //setLabel(xAxisLabel);
      })

      .catch((error) => {
        console.log(error)
      })
  }

  if (loading) {
    return <p> Fetching data from api ...</p>
  }

  return (
    <StyledDiv>
      <CovidSummary
        totalConfirmed={totalConfirmed}
        totalRecovered={totalRecovered}
        totalDeaths={totalDeaths}
        country={country}
      />
      {/*<div>
        <StyledSelectData>
          <option>Select Data</option>
          <option value='Infected'>Total infected</option>
          <option value='Deaths'>Total Deaths</option>
          <option value='Recovered'>total Recovered</option>
        </StyledSelectData>
      </div>*/}

      <div>
        <StyledSelectDays value={days} onChange={daysHandler}>
          <option value='7'>Last 7 days</option>
          <option value='30'>Last 30 days</option>
          <option value='90'>Last 90 days</option>
          <option value='365'>Last 365 days</option>
        </StyledSelectDays>
      </div>

      <LineGraph
        yAxis={coronaCountAr}
        label={label}
      />
      <LineGraphDeaths
        yAxisDeath={deathCountAr}
        label={label}
      />
      <LineGraphRecovered
        yAxisRecovered={recoveredCountAr}
        label={label}
      />
    </StyledDiv>
  )
}

export default PresetCovid