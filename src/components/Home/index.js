import React from 'react';
import CovidTracker from '../CovidTracker/Index'
import GroupGraph from '../CovidTracker/GroupGraph'
import { withAuthorization } from '../Session';
import styled from 'styled-components'
import { StyledPageIntro, StyledSelectBtn } from '../Styles/StyledPageIntro';

import PresetCovid from '../PresetCovid/Index'
import Cards from '../Covid/Cards';
import Chart from '../Covid/Chart';
import Country from '../Covid/Country';
import Covid from '../Covid/Covid'

import GraphList from '../NewGraph';

const StyledH4 = styled.h4`
text-align: center; 
`;

/* import fetchCovidData from '../../api';
import { AuthUserContext } from '../Session'; */

const graphList = [{
  countrySlug: 'sweden',
  country: 'Sweden',
  type: 'confirmed',
  days: 7
}, {
  countrySlug: 'norway',
  country: 'Norway',
  type: 'confirmed',
  days: 7
}, {
  countrySlug: 'denmark',
  country: 'Denmark',
  type: 'confirmed',
  days: 7
},];



class HomePage extends React.Component {

  state = {
    data: {},
    city: []
  }

  /* async componentDidMount() {
    const fetchedData = await fetchCovidData();
    this.setState({ data: fetchedData });
  } */
  componentDidMount() {


    this.props.firebase.user(this.props.firebase.auth.currentUser.uid).child('city').on('value', snapshot => {
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
    if (this.props.firebase.auth.currentUser) {
      this.props.firebase.user(this.props.firebase.auth.currentUser.uid).child('city').off();
    }
  }

  render() {
    const { data } = this.state;

    return (
      <div>
        <StyledPageIntro>
          <h2>Discover</h2>
          <p>Select your graphs and data.</p>
        </StyledPageIntro>
        <GraphList graphList={graphList} />
        {/*this.state.countries.map((item, index) => (<PresetCovid key={index} order={index + 1} country={item} />))*/}
        {/* <PresetCovid order='1' country='sweden' />
      <PresetCovid order='2' country='norway' />
      <PresetCovid order='3' country='mongolia' /> 
      <MultiCovid order='4' countries={['norway', 'sweden'] */}
        <CovidTracker />
        <br></br>
        <hr></hr>
        <StyledH4>Compare countries</StyledH4>
        <GroupGraph />
        {/*infected={false}}
        <Cards data={data} />
        <Chart />
        <Country />*/}
      </div>
    )
  }
};

const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);