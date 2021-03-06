import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from '../Navigation';
import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import AccountPage from '../Account';
import AdminPage from '../Admin';
import Dashboard from '../Dashboard';
import Settings from '../Settings';

import Select from '../Home/Select'
import CompareSelect from '../Home/CompareSelect';
import MortalitySelect from '../Home/MortalitySelect';
import DarkMode from "../DarkMode/DarkMode"
import { Switch, Paper } from '@material-ui/core';
import Header from '../Header/'
import Footer from '../Footer';
import * as ROUTES from '../../constants/routes';
import { withAuthentication } from '../Session';
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`

  body {
    margin: 0;
    padding: 0px;
    font-family: 'Montserrat', sans-serif;
    &:focus {
      outline: none;
      border: none;
    }
  }
`

const StyledDiv = styled.div`
  min-height: 100vh;
  position: relative; 
`;


const StyledBtn = styled.div`
  display: flex;
  margin-top: 1px;
  position: sticky;
  position: fixed;    
  right: 1em;
  top:0;
  z-index: 999; 
`;

function App() {

  return (
    <>
      <GlobalStyle />

      <Router>
        <StyledDiv>
          <Header />
          <Navigation />
          <DarkMode />
          <Route exact path={ROUTES.LANDING} component={LandingPage} />
          <Route exact path={ROUTES.SIGN_UP} component={SignUpPage} />
          <Route exact path={ROUTES.SIGN_IN} component={SignInPage} />
          <Route exact path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
          <Route exact path={ROUTES.HOME} component={HomePage} />
          <Route exact path={ROUTES.ACCOUNT} component={AccountPage} />
          <Route exact path={ROUTES.ADMIN} component={AdminPage} />
          <Route exact path={ROUTES.DASHBOARD} component={Dashboard} />
          <Route exact path={ROUTES.SELECT} component={Select} />
          <Route exact path={ROUTES.COMPARESELECT} component={CompareSelect} />
          <Route exact path={ROUTES.MORTALITYSELECT} component={MortalitySelect} />
        </StyledDiv>
        <Footer />
      </Router>
    </>
  )
}


export default withAuthentication(App);