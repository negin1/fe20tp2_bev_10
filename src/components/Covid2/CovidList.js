import React from 'react'

const CovidList = ({covidData}) => {
  return (
    <div>
      {covidData.map((covidData)=>(
       
        <div key={covidData.id}>
            <h2>{ covidData.contry}</h2>
            <p>{ covidData.confirmed}</p>
            <p>{ covidData.recovered}</p>
       </div>
   
      ))}
      
    </div>
  );
}

export default CovidList
