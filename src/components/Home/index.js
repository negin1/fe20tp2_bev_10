import React from 'react';

import { withAuthorization } from '../Session';
import Cards from '../CovidCards';
import Chart from '../CovidChart';
import Country from '../CovidCountry';
import fetchCovidData from '../../constants/covidapi';

class HomePage extends React.Component {

  state = {
    data: {},
  }

  async componentDidMount() {
    const fetchedData = await fetchCovidData();
    this.setState({ data: fetchedData });
  }

  render() {
    const { data } = this.state;

    return (<div>
      <h1>Home Page</h1>
      <p>The Home Page is accessible by every signed in user.</p>
      <Cards data={data} />
      <Chart />
      <Country />

    </div>
    )
  }
};

const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);