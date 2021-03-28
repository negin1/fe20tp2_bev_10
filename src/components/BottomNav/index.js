import { NavLink } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import styled from 'styled-components'
import AssessmentIcon from '@material-ui/icons/Assessment';
import SettingsIcon from '@material-ui/icons/Settings';
import ExploreIcon from '@material-ui/icons/Explore';

const StyledDiv = styled.div`
font-family: 'Montserrat', sans-serif;
width: 170px;
height: 200px; 
margin-top: -100px;
position: fixed;
z-index: 1;
top: 50%;
right: 0em;

ul {
    list-style-type: none;
    margin: 0px; 
    padding: 0px; 
}

li {
    display: flex; 
    align-items: center; 
    justify-content: flex-start; 

    @media (max-width: 900px) {
        justify-content: flex-end;
        padding-right: 20px; 
    }
}

a {
    text-decoration: none; 
    color: black; 
    font-size: 18px;

    &:hover {
      cursor: pointer;
      color: darkgray;
      }
}

a:nth-of-type(2n) {
    padding-bottom: 5px; 
    @media (max-width: 900px) {
        display: none;
    }
}

a:nth-of-type(2n+1) {
    padding: 0px 10px;
}
  `;





const BottomNav = () => (
    <StyledDiv>
        <ul>
            <li>
                <NavLink to={ROUTES.HOME}><ExploreIcon fontSize="large" /></NavLink>
                <NavLink to={ROUTES.HOME}>Discover</NavLink>
            </li>
            <li>
                <NavLink to={ROUTES.DASHBOARD}><AssessmentIcon fontSize="large" /></NavLink>
                <NavLink to={ROUTES.DASHBOARD}>My charts</NavLink>
            </li>
            <li>
                <NavLink to={ROUTES.SETTINGS}><SettingsIcon fontSize="large" /></NavLink>
                <NavLink to={ROUTES.SETTINGS}>Settings</NavLink>
            </li>
        </ul>
    </StyledDiv>
);

export default BottomNav;