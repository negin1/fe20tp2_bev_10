import React from 'react';
import styled from 'styled-components'
import { NavLink } from 'react-router-dom';
import { AuthUserContext } from '../Session';
import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';
import * as ROLES from '../../constants/roles';


const StyledDiv = styled.div`
  display: flex;
  padding: 20px;
  top:105px; 
  position: sticky;
  top:0;
  text-shadow: white 0px 0px 5px;
  z-index: 999;
  background-color: #708090;
  background-color: #708090;


  
   @media (max-width: 850px) {
       overflow:auto
    }
  ul{
    display: flex;
    margin: 0 auto;

    justify-content: center;


    overflow: auto;
    white-space: nowrap;
    @media (max-width: 850px) {
      justify-content: flex-start;
 }
 li{
    text-decoration: none; 
   list-style: none; 
   font-family: Montserrat;
   font-weight: bold;
   font-size: 20px;
   padding: 26px 30px;
   color: black;
  }
 a {
    text-decoration: none; 
    color: black; 
    &:hover {
      cursor: pointer;
      color: darkgray;
      }
     &:active{
    font-weight:bold; 
  }
}
`;


const Navigation = () => (
  <AuthUserContext.Consumer>
    {authUser =>
      authUser ? (
        <NavigationAuth authUser={authUser} />
      ) : (
        <NavigationNonAuth />
      )
    }
  </AuthUserContext.Consumer>
);

const NavigationAuth = ({ authUser }) => (
  <StyledDiv>
    <ul>
      <li>
        <NavLink to={ROUTES.LANDING}>Start</NavLink>
      </li>
      <li>
        <NavLink to={ROUTES.HOME}>Discover</NavLink>
      </li>
      <li>
        <NavLink to={ROUTES.DASHBOARD}>Dashboard</NavLink>
      </li>
      <li>
        <NavLink to={ROUTES.ACCOUNT}>Account</NavLink>
      </li>
      {authUser.roles[ROLES.ADMIN] && (
        <li>
          <NavLink to={ROUTES.ADMIN}>Admin</NavLink>
        </li>
      )}
      <li className="signout">
        <SignOutButton />
      </li>
    </ul>
  </StyledDiv>

);

const NavigationNonAuth = () => (
  <StyledDiv>
    <ul>
      <li>
        <NavLink to={ROUTES.LANDING}>Start</NavLink>
      </li>
      <li>
        <NavLink to={ROUTES.SIGN_IN}>Sign In</NavLink>
      </li>
    </ul>
  </StyledDiv>
);

export default Navigation;