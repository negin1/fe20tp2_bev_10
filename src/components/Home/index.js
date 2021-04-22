import React from 'react';
import { withAuthorization } from '../Session';
import styled from 'styled-components'
import { StyledPageIntro } from '../Styles/StyledPageIntro';
import BottomNav from '../BottomNav';
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


class HomePage extends React.Component {


    render() {
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
                    <br></br>
                    <StyledSection>
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