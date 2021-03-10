import React from 'react'
import { fetchData } from './Api'


import Cards from './Cards'
import Chart from './Chart'

class Covid extends React.Component {

  state = {
    data: {},
  }

  async componentDidMount(){
    const fetchedData = await fetchData();

   this.setState({data: fetchedData});
  }
  render() {
    const {data} = this.state;
    return (
      <div>
      
      <Cards data={data} />
      <Chart />
      </div>
    )
  }
}

export default Covid
