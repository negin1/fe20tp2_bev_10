import React from 'react';
import Covid from '../Covid/Covid'
import CovidTracker from '../CovidTracker/Index'



import { withAuthorization } from '../Session';
import Cards from '../Covid/Cards';
/* import Chart from '../Covid/Chart';
import Country from '../Covid/Country';*/
import fetchCovidData from '../../api'; 

class HomePage extends React.Component {

  state = {
    data: {},
  }

  /* async componentDidMount() {
    const fetchedData = await fetchCovidData();
    this.setState({ data: fetchedData });
  } */

  render() {
    const { data } = this.state;

    return (<div>
      <h1>Home Page</h1>
      <p>The Home Page is accessible by every signed in user.</p>
      <br></br>
      <Covid />
      <CovidTracker />
     {/*  <Cards data={data} />
      <Chart />
      <Country /> */}

    </div>
    )
  }
};

const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);