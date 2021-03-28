import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import GlobalStyle from '../Styles/globalStyle'
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

import BottomNav from '../BottomNav';
import Footer from '../Footer';

import * as ROUTES from '../../constants/routes';
import { withAuthentication } from '../Session';

import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components';

{/*const GlobalStyle = createGlobalStyle`

  body {
    background-color: #eeeeee;
  }
`;*/}

const StyledDiv = styled.div`
 min-height: 100vh;
 position: relative; 
`;

const StyledDiv2 = styled.div`
 padding-bottom: 22rem;
 padding-top: 2rem; 

 @media (max-width: 1000px) {
        height: 18rem;
        padding-top: 4rem;
    }

 @media (max-width: 520px) {
    padding-bottom: 24rem;
    padding-top: 2rem;
    }
`;

const App = () => (

  <Router>
    <StyledDiv>
      <Navigation />
      <hr />
      <Route exact path={ROUTES.LANDING} component={LandingPage} />
      <Route exact path={ROUTES.SIGN_UP} component={SignUpPage} />
      <Route exact path={ROUTES.SIGN_IN} component={SignInPage} />
      <Route
        exact
        path={ROUTES.PASSWORD_FORGET}
        component={PasswordForgetPage}
      />
      <Route exact path={ROUTES.HOME} component={HomePage} />
      <Route exact path={ROUTES.ACCOUNT} component={AccountPage} />
      <Route exact path={ROUTES.ADMIN} component={AdminPage} />
      <Route exact path={ROUTES.DASHBOARD} component={Dashboard} />
      <Route exact path={ROUTES.SETTINGS} component={Settings} />
      <BottomNav />
      <StyledDiv2>
        <Footer />
      </StyledDiv2>
    </StyledDiv>
  </Router>
);

export default withAuthentication(App);