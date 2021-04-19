import { NavLink } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import styled from 'styled-components'
import AssessmentIcon from '@material-ui/icons/Assessment';
import SettingsIcon from '@material-ui/icons/Settings';
import ExploreIcon from '@material-ui/icons/Explore';

const StyledDiv = styled.div`
font-family: 'Montserrat', sans-serif;
width: 50px;
height: 170px; 
position: fixed;
z-index: 1;
bottom: 40%;
 right: 1em; 


@media (max-width: 500px) {
background-color: #eeeeee;
width: 100%;
height: 75px;
z-index: 0;
bottom: 0;
right: 0;
border-top: 5px solid darkgray;
    }

ul {
    list-style-type: none;
    margin: 0px; 
    padding: 0px; 
    display: flex; 
    flex-direction: column; 
    @media (max-width: 500px) {
        width: 80%;
        padding-top: 10px;
        margin-left: auto; 
        margin-right: auto; 
        display: flex;
        flex-direction: row;
        justify-content: space-between; 
    }
}

li span {
    display: none; 
    @media (max-width: 500px) {
         display: flex; 
    }
}

li {  
    @media (max-width: 500px) {
         max-width: 100px; 
         text-align: center;
    }
}

a {
    text-decoration: none; 
    color: black; 

    &:hover {
      cursor: pointer;
      color: darkgray;
    }
    &:active {
        color: darkgray;
    }
}
`;

const BottomNav = () => (
    <StyledDiv>
        <ul>
            <li>
                <NavLink to={ROUTES.HOME}><ExploreIcon fontSize="large" /><span>Discover</span></NavLink>
            </li>
            <li>
                <NavLink to={ROUTES.DASHBOARD}><AssessmentIcon fontSize="large" /><span>Dashboard</span></NavLink>
            </li>
            <li>
                <NavLink to={ROUTES.SETTINGS}><SettingsIcon fontSize="large" /><span>Settings</span></NavLink>
            </li>
        </ul>
    </StyledDiv>
);

export default BottomNav;