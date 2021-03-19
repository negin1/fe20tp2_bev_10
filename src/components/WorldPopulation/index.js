import React from 'react';
import axios from 'axios';
import { useState} from 'react'; 
import WorlPopulation from './WorlPopulation';

function index() {
  

  
   
const options = {
  method: 'GET',
  url: 'https://world-population.p.rapidapi.com/population',
  params: {country_name: 'Spain'},
  headers: {
    'x-rapidapi-key': 'a083fcaa0cmsh3e5b481d0d3c93ep1dd538jsnd7bb888636da',
    'x-rapidapi-host': 'world-population.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
})

.catch(function (error) {
	console.error(error);
});
      return (
        <div>
        <h1>select Country</h1>
        <WorlPopulation />
        </div>
      )
    
} 
export default index