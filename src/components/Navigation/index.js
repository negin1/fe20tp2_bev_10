import React from 'react';
import styled from 'styled-components'
import { NavLink } from 'react-router-dom';
import { AuthUserContext } from '../Session';
import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';
import * as ROLES from '../../constants/roles';


const StyledDiv = styled.div`
  display: flex;
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
  padding: 20px;
  top:105px; 
=======
=======
>>>>>>> 19f11c6d1eed9efbba99f0c2295fde7c6f62e64f
>>>>>>> anna-dev
  position: sticky;
  top:0;
  text-shadow: white 0px 0px 5px;
  z-index: 999;
  background-color: #E6E6FA;
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> 843b468ef4f5914be7a0c0457b137f265fdbba02
=======
>>>>>>> 19f11c6d1eed9efbba99f0c2295fde7c6f62e64f

>>>>>>> anna-dev
  
   @media (max-width: 850px) {
       overflow:auto
    }
 > ul{
    display: flex;
    margin: 0 auto;
<<<<<<< HEAD
    justify-content: center;
=======
>>>>>>> anna-dev
    overflow: auto;
    white-space: nowrap;
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
        <NavLink to={ROUTES.LANDING}>Landing</NavLink>
      </li>
      <li>
        <NavLink to={ROUTES.HOME}>Home</NavLink>
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
        <NavLink to={ROUTES.LANDING}>Landing</NavLink>
      </li>
      <li>
        <NavLink to={ROUTES.SIGN_IN}>Sign In</NavLink>
      </li>
    </ul>
  </StyledDiv>
);

export default Navigation;