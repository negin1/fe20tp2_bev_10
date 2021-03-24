import React, {useState} from 'react';
import axios from 'axios';
import { withFirebase } from '../Firebase'
import { AuthUserContext } from '../Session'

import Context from './Context';


import Content from './Content';
import WeatherSearch from './WeatherSearch';
import WeatherData from './WeatherData';
import DateTime from './DateTime';


import Error from './Error';




const Weather = () => {

  const [weather, setWeather] = useState()

  const[city, setCity] = useState()

  const[error, setError]= useState()

  /* const userID = useContext(AuthUserContext).uid */

  /* const favouriteCity = useContext(AuthUserContext).favoutiteCity */

  console.log(city)

  const api_call = async (e) => {

    e.preventDefault()
    
    const location = e.target.elements.location.value

     if(!location){
        return setError('Please enter the name of the city')
      }else{
        setWeather(null);
      }      

    const API_KEY = "666212898aa111eec482dd74a6f54bfe" 

    const url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`
    
    const request = axios.get(url)

    const response = await request

    setWeather(response.data.main)
    
    setCity(response.data.name)
    
    setError(null)
  }

  console.log(weather)

  

  return (
    <div>
     <p>Weather Header </p>

     <Content>
      <DateTime />
      <Context.Provider value={{ api_call, weather, city}}>
         <WeatherSearch />
      { weather && <WeatherData /> }
      </Context.Provider>
     { error && <Error error={error}/> }
     
     </Content>
      
    </div>
  )
}

export default Weather
