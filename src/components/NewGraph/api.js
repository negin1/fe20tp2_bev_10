import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios'

const BASE_URL = 'https://api.covid19api.com'

const formatDate = (date) => {
    const d = new Date(date)
    //2021-03-09;
    const year = d.getFullYear()
    const month = `0${d.getMonth() + 1}`.slice(-2)
    const _date = d.getDate()
    return `${year}-${month}-${_date}`
}

export const daysHandler = (days) => {

    const d = new Date()
    const to = formatDate(d)
    const from = formatDate(d.setDate(d.getDate() - days))
    console.log(from)
    /* getCoronaReportByDateRange(country, from, to)
    getDeathReportByDateRange(country, from, to)
    getRecoveredReportByDateRange(country, from, to) */
    return { from, to }
}


export const getReportByDateRange = (type, countrySlug, from, to) => {
    const tester = async (data) => {
        console.log(data)
        return await data
    }

    return axios.get(
        `${BASE_URL}/country/${countrySlug}/status/${type}?from=${from}T00:00:00Z&to=${to}T00:00:00Z`
    )
        .then((res) => {
            //console.log(res)
            let data = res.data.filter(item => item.Province === '');
            data = data.slice(0, data.length - 1);

            //const yAxisCoronaCount = res.data.map((d) => d.Cases)
            //const xAxisLabel = res.data.map(d => d.Date)
            //const covidDetails = covidSummary.Countries.find(country => country.Slug === countrySlug)
            // begin krilles specialkod
            //console.log(data)
            const yAxisCoronaCount = data.map((d) => d.Cases)
            const xAxisLabel = data.map(d => d.Date)
            console.log(yAxisCoronaCount)
            console.log(xAxisLabel)

            // end
            /* setCoronaCountAr(yAxisCoronaCount)
            setTotalConfirmed(covidDetails.TotalConfirmed);
            setTotalRecovered(covidDetails.TotalRecovered);
            setTotalDeaths(covidDetails.TotalDeaths);
            setLabel(xAxisLabel); */
            // should return cases, 
            return ({ data: [yAxisCoronaCount], labels: [xAxisLabel] });
        })

        .catch((error) => {
            console.log(error)
            return { error: error }
        })

}


export const getAPIData = () => {
    const data = {}
    // axios
    return data
}