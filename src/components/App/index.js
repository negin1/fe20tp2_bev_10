import React, {useState, useEffect} from 'react';
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
import BottomNav from '../BottomNav';
import Covid2 from '../Covid2/Index';
import Select from '../Home/Select'
import CompareSelect from '../Home/CompareSelect';
import MortalitySelect from '../Home/MortalitySelect';

// https://stackoverflow.com/questions/63097218/darkmode-store-in-local-storage-react-with-material-ui


import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Switch, Paper } from '@material-ui/core';
import Header from '../Header/'
import Footer from '../Footer';

import * as ROUTES from '../../constants/routes';
import { withAuthentication } from '../Session';

import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components';
import { light } from '@material-ui/core/styles/createPalette';

const GlobalStyle = createGlobalStyle`

  body {
    /* background-color: #eeeeee; */
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
   const  [darkMode, setDarkMode] = useState(false)

  const theme = createMuiTheme({
    palette:{
     type: darkMode ? "dark" : "light", 
    },
  })
 
     useEffect(() => {
      //Cheek for delected theme /// local storage
      const currentThemeColor = localStorage.getItem('theme-color');
      //if found set selected theme value in state
      if (currentThemeColor) {
        localStorage.setItem("darkMode", true);
     }
  }, [])

      //set theme
      const onChange =() => {
        setDarkMode(!darkMode);
        localStorage.setItem('theme',JSON.stringify(darkMode))
      } 

  return(
  <>

<ThemeProvider theme={theme}>
  <Paper>
   
  <GlobalStyle />

    <Covid2 />
    <Router>
      <StyledDiv>
        <Header />
        <Navigation />
        <StyledBtn>
          <Switch checked={darkMode} onChange={onChange }/> 
      {/* <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode) }/>  */}
        </StyledBtn>
        <Route exact path={ROUTES.LANDING} component={LandingPage} />
        <Route exact path={ROUTES.SIGN_UP} component={SignUpPage} />
        <Route exact path={ROUTES.SIGN_IN} component={SignInPage} />
        <Route exact path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage}
        />
        <Route exact path={ROUTES.HOME} component={HomePage} />
        <Route exact path={ROUTES.ACCOUNT} component={AccountPage} />
        <Route exact path={ROUTES.ADMIN} component={AdminPage} />
        <Route exact path={ROUTES.DASHBOARD} component={Dashboard} />
        <Route exact path={ROUTES.SETTINGS} component={Settings} />
        <Route exact path={ROUTES.SELECT} component={Select} />
        <Route exact path={ROUTES.COMPARESELECT} component={CompareSelect} />
        <Route exact path={ROUTES.MORTALITYSELECT} component={MortalitySelect} />
      </StyledDiv>
      <Footer />
    </Router>
   </Paper>
    </ThemeProvider>
  </>
  )
}


export default withAuthentication(App);