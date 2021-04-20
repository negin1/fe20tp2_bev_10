import React from 'react';
import CovidTracker from '../CovidTracker/Index'
import GroupGraph from '../CovidTracker/GroupGraph'
import { withAuthorization } from '../Session';
import styled from 'styled-components'
import { StyledPageIntro, StyledSelectBtn } from '../Styles/StyledPageIntro';
import Select from './Select';
import CompareSelect from './CompareSelect';
import MortalitySelect from './MortalitySelect';
import BottomNav from '../BottomNav';
import Footer from '../Footer';

import PresetCovid from '../PresetCovid/Index'
import Cards from '../Covid/Cards';
import Chart from '../Covid/Chart';
import Country from '../Covid/Country';
import Covid from '../Covid/Covid'

import GraphList from '../NewGraph';
import { Link } from "react-router-dom";

const StyledDiv = styled.div`
max-width: 90%;
text-align: center; 
margin: 0px auto; 
`;




const StyledSection = styled.div`
    margin-top: 100px

`;

const Button = styled.button`
 
        color: white;
      background: black;
      border-radius: 20px;
      padding: 7px 7px;
    margin: 0 auto;
      font-size: 15px;
      `



const StyledImg = styled.img`
   
     @media screen and (max-width: 875px) {
    width: 80%;
    height: 50vh;
  }  
    @media screen and (max-width: 769px) {
    width: 80%;
    height: 30vh;
  } 
  @media screen and (max-width: 400px) {
    width: 80%;
    height: 30vh
  }
  @media screen and (max-width: 300px) {
    width: 80%;
    height: 15vh
  }
`;




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
                    <h1>Discover</h1>
                    <p>We provide three different charts you can choose from.</p>
                    <p>Please navigate to the chart you would like to discover.</p>
                </StyledPageIntro>

                <StyledDiv>
                    <StyledSection>
                        <br></br>
                        <h2>Select and view covid-19 data per country</h2>
                        <Link to="/Select">
                            <StyledImg src='/images/infectedtwo.jpg' alt="" />
                        </Link> <br />
                        <Button type="button" style={{ cursor: 'pointer', outline: '0' }}
                            onClick={(e) => {
                                e.preventDefault();
                                window.location.href = '/Select';
                            }}>Customise your data</Button>
                    </StyledSection>
                    {/*<GraphList graphList={graphList} />
                this.state.countries.map((item, index) => (<PresetCovid key={index} order={index + 1} country={item} />))*/}
                    {/* <PresetCovid order='1' country='sweden' />
      <PresetCovid order='2' country='norway' />
      <PresetCovid order='3' country='mongolia' /> 
      <MultiCovid order='4' countries={['norway', 'sweden'] 
                <hr></hr>
                <StyledH4>Compare countries</StyledH4>
                <GroupGraph />
        infected={false}
                <Cards data={data} />
                <Chart />
                <Country />*/}
                    <br></br>
                    <StyledSection>
                        <Cards data={data} />
                        <h2>Compare data from three countries (last 365 days)</h2>
                        <Link to="/CompareSelect">
                            <StyledImg src="/images/deaththree.jpg" alt="" />
                        </Link> <br />
                        <Button type="button" style={{ cursor: 'pointer', outline: '0' }}
                            onClick={(e) => {
                                e.preventDefault();
                                window.location.href = '/CompareSelect';
                            }}>Customise your data</Button>
                    </StyledSection>

                    <br></br>

                    <StyledSection>
                        <div >
                            <h2>View mortality rate per country (percent of total infected)</h2>

                            <Link to="/mortalitySelect">
                                <StyledImg src="/images/mortalitytwo.jpg" alt="" />
                            </Link> <br />
                            <Button type="button" style={{ cursor: 'pointer', outline: '0' }}
                                onClick={(e) => {
                                    e.preventDefault();
                                    window.location.href = '/mortalitySelect';
                                }}>Customise your data</Button>
                        </div>
                    </StyledSection>


                </StyledDiv>
                <BottomNav />
            </div>
        )
    }
};

const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);