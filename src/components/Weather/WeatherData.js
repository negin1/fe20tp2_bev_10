import React, { useContext, useState } from 'react';
//import { withFirebase } from '../Firebase'
//import { AuthUserContext } from '../Session'

import Context from './Context'

const WeatherData = () => {

  const { weather, city } = useContext(Context)

  const { temp, humidity, pressure } = weather



  const markFavourite = () => {
    {/*firebase.user(userID).child('city').update({city})*/ }
    let cityArr = [];
    cityArr.push(city)
    console.log(cityArr)
  }

  return (
    <div className="weather-data">
      <p className="weather__tagline">Weather information for <span className="weather-data__city">{city}</span></p>

      <div className="weather-data__box">
        <span className="weather-data__property">
          <p className="weather-data__title">Temperature</p>
          <p className="weather-data__value">{temp}</p>
        </span>
        <span className="weather-data__property">
          <p className="weather-data__title">Humidity</p>
          <p className="weather-data__value">{humidity}</p>
        </span>
        <span className="weather-data__property">
          <p className="weather-data__title">Pressure</p>
          <p className="weather-data__value">{pressure}</p>
        </span>

      </div>
      <button onClick={markFavourite}> Add {city} as favourite city</button>
    </div>
  )
}

export default WeatherData;
