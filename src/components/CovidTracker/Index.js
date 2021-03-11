import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import LineGraph from './LineGraph'
import CovidSummary from './CovidSummary'
import axios from './axios'

const StyledDiv = styled.div`
  text-align: center;
`

function CovidTracker() {
  const [totalConfirmed, setTotalConfirmed] = useState(0)
  const [totalRecovered, setTotalRecovered] = useState(0)
  const [totalDeaths, setTotalDeaths] = useState(0)
  const [loading, setLoading] = useState(false)
  const [covidSummary, setCovidSummary] = useState({})
  const [days, setDays] = useState(7)
  const [country, setCountry] = useState('')
  const [coronaCountAr, setCoronaCountAr] = useState([])

  //ComponentDidMount
  useEffect(() => {
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
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  const fromatDate = (date) => {
    const d = new Date(date)
    //2021-03-09;
    const year = d.getFullYear()
    const month = `0${d.getMonth() + 1}`.slice(-2)
    const _date = d.getDate()
    return `${year}-${month}-${_date}`
  }

  const countryHandler = (e) => {
    setCountry(e.target.value)
    const d = new Date()
    const to = fromatDate(d)
    const from = fromatDate(d.setDate(d.getDate() - 7))

    //console.log(from, to)
    getCoronaReportByDateRange(e.target.value, from, to)
  }

  const daysHandler = (e) => {
    setDays(e.target.value)
  }

  const getCoronaReportByDateRange = (countrySlug, from, to) => {
    axios.get(
        `/country/${countrySlug}/status/confirmed?from=${from}T00:00:00Z&to={to}T00:00:00Z`
      )
      .then((res) => {
        console.log(res)

        const yAxisCoronaCount = res.data.map((d) => d.Cases)
        setCoronaCountAr(yAxisCoronaCount)
      })

      .catch((error) => {
        console.log(error)
      })
  }

  if (loading) {
    return <p> Fetchind gata from api ...</p>
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
          {covidSummary.Countries &&
            covidSummary.Countries.map((country) => (
              <option key={country.Slug} value={country.Slug}>
                {country.Country}
              </option>
            ))}
        </select>
        <select value={days} onChange={daysHandler}>
          <option value='7'>Last 7 days</option>
          <option value='30'>Last 30 days</option>
          <option value='90'>Last 90 days</option>
        </select>
      </div>
      <LineGraph yAxis={coronaCountAr} />
    </StyledDiv>
  )
}

export default CovidTracker
