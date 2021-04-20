import React from 'react';
import { withAuthorization } from '../Session';
import styled from 'styled-components'
import { StyledPageIntro, StyledSelectBtn } from '../Styles/StyledPageIntro';
import BottomNav from '../BottomNav';
<<<<<<< HEAD
import Footer from '../Footer';

import PresetCovid from '../PresetCovid/Index'
import Cards from '../Covid/Cards';
import Chart from '../Covid/Chart';
import Country from '../Covid/Country';
import Covid from '../Covid/Covid'

import GraphList from '../NewGraph';
=======
>>>>>>> ad4f3a171c956b151da5abd34a99198e8901e65c
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
<<<<<<< HEAD



=======
>>>>>>> ad4f3a171c956b151da5abd34a99198e8901e65c
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

<<<<<<< HEAD



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


=======
>>>>>>> ad4f3a171c956b151da5abd34a99198e8901e65c

class HomePage extends React.Component {


    render() {
        return (
            <div>
                <StyledPageIntro>
                    <h1>Discover</h1>
                    <p>We provide three different charts you can choose from.</p>
                    <p>Please navigate to the chart you would like to discover.</p>
<<<<<<< HEAD

                </StyledPageIntro>


                <StyledDiv>


                    <StyledSection>


                        <br></br>
                        <h2>Select and view covid-19 data per country</h2>
                        <Link to="/Select">
                            <StyledImg src="/images/oneChart.jpg" alt="" />
                        </Link>
                        <Button type="button"
=======
                </StyledPageIntro>

                <StyledDiv>
                    <StyledSection>
                        <br></br>
                        <h2>Select and view covid-19 data per country</h2>
                        <Link to="/Select">
                            <StyledImg src='/images/infectedtwo.jpg' alt="" />
                        </Link> <br />
                        <Button type="button" style={{ cursor: 'pointer', outline: '0' }}
>>>>>>> ad4f3a171c956b151da5abd34a99198e8901e65c
                            onClick={(e) => {
                                e.preventDefault();
                                window.location.href = '/Select';
                            }}>Customise your data</Button>
<<<<<<< HEAD

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
                        <h2>Compare data from three countries (last 365 days)</h2>

                        <Link to="/CompareSelect">
                            <StyledImg src="/images/compare.jpg" alt="" />
                        </Link>
                        <Button type="button"
=======
                    </StyledSection>
                    <br></br>
                    <StyledSection>
                        <h2>Compare data from three countries (last 365 days)</h2>
                        <Link to="/CompareSelect">
                            <StyledImg src="/images/deaththree.jpg" alt="" />
                        </Link> <br />
                        <Button type="button" style={{ cursor: 'pointer', outline: '0' }}
>>>>>>> ad4f3a171c956b151da5abd34a99198e8901e65c
                            onClick={(e) => {
                                e.preventDefault();
                                window.location.href = '/CompareSelect';
                            }}>Customise your data</Button>
                    </StyledSection>
<<<<<<< HEAD

=======
>>>>>>> ad4f3a171c956b151da5abd34a99198e8901e65c
                    <br></br>
                    <StyledSection>
<<<<<<< HEAD
                        <h2>View mortality rate per country (percent of total infected)</h2>

                        <Link to="/mortalitySelect">
                            <StyledImg src="/images/mortalitySelect.jpg" alt="" />
                        </Link>
                        <Button type="button"
                            onClick={(e) => {
                                e.preventDefault();
                                window.location.href = '/mortalitySelect';
                            }}>Customise your data</Button>
=======
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
>>>>>>> ad4f3a171c956b151da5abd34a99198e8901e65c
                    </StyledSection>


                </StyledDiv>
                <BottomNav />
            </div>
        )
    }
};

const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);