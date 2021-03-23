import React from 'react';
import CovidTracker from '../CovidTracker/Index'
import styled from 'styled-components'
import CovidSummary from '../CovidTracker/CovidSummary'

import PresetCovid from '../PresetCovid/Index'

import { withAuthorization } from '../Session';
import Cards from '../Covid/Cards';
/* import Chart from '../Covid/Chart';
import Country from '../Covid/Country';*/
import fetchCovidData from '../../api';
import { AuthUserContext } from '../Session';

const StyledDiv = styled.div`
  display: flex; 
  justify-content: center;
  margin-bottom: 20px;
`

const StyledButton = styled.button`
  height: 40px;
`


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

    function sayHello() {
      console.log('Hello!');
    }

    return (
      <div>
        <h1>Home Page</h1>

        <br></br>
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
        <StyledDiv>
          <StyledButton onClick={sayHello}>Select this graph and data</StyledButton>
        </StyledDiv>
      </div>
    )
  }
};

const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);