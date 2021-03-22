import React from 'react';
import Covid from '../Covid/Covid'
import CovidTracker from '../CovidTracker/Index'

import PresetCovid from '../PresetCovid/Index'

import { withAuthorization } from '../Session';
import Cards from '../Covid/Cards';
/* import Chart from '../Covid/Chart';
import Country from '../Covid/Country';*/
import fetchCovidData from '../../api';
import { AuthUserContext } from '../Session';

class HomePage extends React.Component {

  state = {
    data: {},
    countries: []
  }

  /* async componentDidMount() {
    const fetchedData = await fetchCovidData();
    this.setState({ data: fetchedData });
  } */
  componentDidMount() {


    this.props.firebase.user(this.props.firebase.auth.currentUser.uid).child('countries').on('value', snapshot => {
      const countryObject = snapshot.val();
      if (countryObject) {

        const countries = Object.keys(countryObject);

        this.setState({
          countries,
        });
      }
    });
  }

  componentWillUnmount() {
    this.props.firebase.user(this.props.firebase.auth.currentUser.uid).child('countries').off();
  }

  render() {
    const { data } = this.state;

    return (<div>
      <h1>Home Page</h1>

      <br></br>
      <Covid />
      {/*this.state.countries.map((item, index) => (<PresetCovid key={index} order={index + 1} country={item} />))*/}
      {/* <PresetCovid order='1' country='sweden' />
      <PresetCovid order='2' country='norway' />
      <PresetCovid order='3' country='mongolia' /> 
      <MultiCovid order='4' countries={['norway', 'sweden'] */}
      <CovidTracker />
      {/*infected={false}} 
        {/*  <Cards data={data} />
      <Chart />
      <Country /> */}

    </div>
    )
  }
};

const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);