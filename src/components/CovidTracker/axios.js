import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: `https://api.covid19api.com/`
})



{/*const options = {
  method: 'GET',
  url: 'https://world-population.p.rapidapi.com/population',
  params: {country_name: 'Sweden'},
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
});*/}

export default axiosInstance;




