import React, { useState, useEffect} from 'react';
import {fetchDailyData} from '../../api'
import {Line} from 'react-chartjs-2';

import LineChart from '../LineChart';

const Chart = () => {
  const [dailyData, setDailyData] =  useState([]);

 useEffect (() => {
  const fetchAPI = async () => {
      setDailyData(await fetchDailyData());  
  }
      fetchAPI();
 }, []);

  return (
    <div className="container">
     {dailyData && <LineChart dailyData={dailyData} />}
     {/*dailyData && lineChart*/}
    </div>
  )
}

export default Chart