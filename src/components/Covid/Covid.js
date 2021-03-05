import React from 'react'
import { fetchData } from './Api'


import Cards from './Cards'

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
      </div>
    )
  }
}

export default Covid
