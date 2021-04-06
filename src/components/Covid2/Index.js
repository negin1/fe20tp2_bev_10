
import {useState, useEffect} from 'react'
import CovidList from './CovidList'

const Index = () => {

  const [covidData, setCovidData] = useState(null);

  useEffect(() => {
    fetch('https://covid19.mathdro.id/api')
      .then(res =>{
        return res.json();
      })
      .then(data =>{
        console.log(data)
        setCovidData(data);
      });
  }, []);

  return (
    <div>
      { covidData && <CovidList covidData={covidData}/>}
    </div>
  );
}

export default Index
