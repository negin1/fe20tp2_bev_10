import React from 'react';
import { Line } from 'react-chartjs-2';

/*
(https://www.robinwieruch.de/react-state-usereducer-usestate-usecontext)
let settingsObject =[{
  type: 'Line',
  countries: ['sweden', 'norway', 'denmark'],
  numberOfDays: 7,
  type: 'Infected'
},
{
  type: 'Line',
  countries: ['canada'],
  numberOfDays: 30,
  type: 'Deaths'
}]

{dates: ['2021-03-10', '2021-03-11'],
data: [
  {'Sweden Infected': [4000, 5000},
  {'Norway Infected': [300, 400]}
]}

{

        labels: ['2021-03-24', '2021-03-25', '2021-03-26', '2021-03-27', ...],
        datasets: [
          {

            label: 'Norway',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [34000, 35000, 36000, ...]
          },
          {

            label: 'Sweden',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [34000, 35000, 36000, ...]
          }]

*/
const formatDate = (date) => {
  const d = new Date(date)
  //2021-03-09;
  const year = d.getFullYear()
  const month = `0${d.getMonth() + 1}`.slice(-2)
  const _date = d.getDate()
  return `${year}-${month}-${_date}`
}


let swedenData = [{"Country":"Sweden","CountryCode":"SE","Province":"","City":"","CityCode":"","Lat":"60.13","Lon":"18.64","Cases":732070,"Status":"confirmed","Date":"2021-03-17T00:00:00Z"},{"Country":"Sweden","CountryCode":"SE","Province":"","City":"","CityCode":"","Lat":"60.13","Lon":"18.64","Cases":738537,"Status":"confirmed","Date":"2021-03-18T00:00:00Z"},{"Country":"Sweden","CountryCode":"SE","Province":"","City":"","CityCode":"","Lat":"60.13","Lon":"18.64","Cases":744272,"Status":"confirmed","Date":"2021-03-19T00:00:00Z"},{"Country":"Sweden","CountryCode":"SE","Province":"","City":"","CityCode":"","Lat":"60.13","Lon":"18.64","Cases":744272,"Status":"confirmed","Date":"2021-03-20T00:00:00Z"},{"Country":"Sweden","CountryCode":"SE","Province":"","City":"","CityCode":"","Lat":"60.13","Lon":"18.64","Cases":744272,"Status":"confirmed","Date":"2021-03-21T00:00:00Z"},{"Country":"Sweden","CountryCode":"SE","Province":"","City":"","CityCode":"","Lat":"60.13","Lon":"18.64","Cases":744272,"Status":"confirmed","Date":"2021-03-22T00:00:00Z"},{"Country":"Sweden","CountryCode":"SE","Province":"","City":"","CityCode":"","Lat":"60.13","Lon":"18.64","Cases":758335,"Status":"confirmed","Date":"2021-03-23T00:00:00Z"}]

let norwayData = [{"Country":"Norway","CountryCode":"NO","Province":"","City":"","CityCode":"","Lat":"60.47","Lon":"8.47","Cases":83519,"Status":"confirmed","Date":"2021-03-17T00:00:00Z"},{"Country":"Norway","CountryCode":"NO","Province":"","City":"","CityCode":"","Lat":"60.47","Lon":"8.47","Cases":84553,"Status":"confirmed","Date":"2021-03-18T00:00:00Z"},{"Country":"Norway","CountryCode":"NO","Province":"","City":"","CityCode":"","Lat":"60.47","Lon":"8.47","Cases":85542,"Status":"confirmed","Date":"2021-03-19T00:00:00Z"},{"Country":"Norway","CountryCode":"NO","Province":"","City":"","CityCode":"","Lat":"60.47","Lon":"8.47","Cases":86362,"Status":"confirmed","Date":"2021-03-20T00:00:00Z"},{"Country":"Norway","CountryCode":"NO","Province":"","City":"","CityCode":"","Lat":"60.47","Lon":"8.47","Cases":86939,"Status":"confirmed","Date":"2021-03-21T00:00:00Z"},{"Country":"Norway","CountryCode":"NO","Province":"","City":"","CityCode":"","Lat":"60.47","Lon":"8.47","Cases":88035,"Status":"confirmed","Date":"2021-03-22T00:00:00Z"},{"Country":"Norway","CountryCode":"NO","Province":"","City":"","CityCode":"","Lat":"60.47","Lon":"8.47","Cases":89120,"Status":"confirmed","Date":"2021-03-23T00:00:00Z"},{"Country":"Norway","CountryCode":"NO","Province":"","City":"","CityCode":"","Lat":"60.47","Lon":"8.47","Cases":89120,"Status":"confirmed","Date":"2021-03-24T00:00:00Z"}]
const swedenCases = swedenData.map((d) => d.Cases)
const norwayCases = norwayData.map((d) => d.Cases)

const dates = data.map(d => d.Date)

// write some functions, look at my code in route-trainer
// the variables you need are 

const GroupGraph = (props) => {

  return (
    <div
      style={{
        width: '600px',
        height: 'auto',
        margin: '40px auto',
      }}
    >

      <Line data={{

        labels: props.label.map(l => l.substring(0, 10)),
        datasets: [
          {
            label: 'Total infected people per country',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: props.yAxis
          },

        ]
      }} />

    </div>
  )
}

export default GroupGraph